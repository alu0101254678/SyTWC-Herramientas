import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import { env } from '../utils/env'
import { createUploadLink } from 'apollo-upload-client'
import omitDeep from 'omit-deep-lodash'

let access_token

const httpLink = createUploadLink({
  uri: `${env.REACT_APP_GQL_HTTP_PROTOCOL}://${env.REACT_APP_GQL}/graphql`,
  onError: onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  })
})

const omitTypenameLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, ['__typename'])
  }
  return forward(operation)
})

const retryLink = new RetryLink({
  delay: {
    initial: 200,
    max: 2000,
    jitter: true
  },
  attempts: {
    max: 3
  }
})

const myAppLink = () => ApolloLink.from([omitTypenameLink, retryLink, httpLink])

const cache = new InMemoryCache({
  typePolicies: {
    Page: {
      keyFields: ['afterId', 'sortBy', 'direction', 'pageSize']
    }
  }
})

export function setAccessToken(accessToken) {
  access_token = accessToken
}

let apolloClient
export const getApolloClient = () => {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      link: myAppLink(),
      cache
    })
  }
  return apolloClient
}
