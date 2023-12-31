// lifecycle-component.js

// Definimos una clase que extiende de HTMLElement para crear nuestro Web Component
class LifecycleComponent extends HTMLElement {
  // El constructor se llama cuando se crea una instancia del componente
  constructor() {
    super(); // Llamamos al constructor de la clase padre (HTMLElement)
    console.log('Creado'); // Imprimimos un mensaje en la consola

    // Definimos un callback para cuando el componente se adjunta al DOM
    this.attachedCallback = () => {
      console.log('Adjuntado al DOM');
    };

    // Definimos un callback para cuando el componente se separa del DOM
    this.detachedCallback = () => {
      console.log('Separado del DOM');
    };
  }

  // Este método se llama cuando el componente se conecta al DOM
  connectedCallback() {
    this.attachedCallback();
  }

  // Este método se llama cuando el componente se desconecta del DOM
  disconnectedCallback() {
    this.detachedCallback();
  }

  // Este método se llama cuando cambia un atributo observado del componente
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Cambio en los atributos: ${name} - Antiguo valor: ${oldValue} - Nuevo valor: ${newValue}`);
  }

  // Este getter devuelve la lista de atributos observados del componente
  static get observedAttributes() {
    return ['custom-attribute'];
  }

  // Este getter devuelve el valor del atributo personalizado
  get customAttribute() {
    return this.getAttribute('custom-attribute');
  }

  // Este setter establece el valor del atributo personalizado
  set customAttribute(value) {
    this.setAttribute('custom-attribute', value);
  }
}

// Definimos el nuevo elemento personalizado
customElements.define('lifecycle-component', LifecycleComponent);