/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CustomRoute from '../components/routing/CustomRoute'

import { Forbidden, NotFound } from '@totalsoft/rocket-ui'
import Dashboard from 'features/dashboard/Dashboard'
import SecuritySettings from 'features/settings/SecuritySettings'
import PrivacySettings from 'features/settings/PrivacySettings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<CustomRoute isPrivate={false} component={Dashboard} />} />
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route path="/settings/security" element={<CustomRoute component={SecuritySettings} />} />
      <Route path="/settings/privacy" element={<CustomRoute component={PrivacySettings} />} />
      <Route path="/forbidden" element={<Forbidden />} />
      <Route path="*" element={<NotFound title="PageNotFound" />} />
    </Routes>
  )
}
