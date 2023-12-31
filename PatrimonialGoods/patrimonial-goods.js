// Definimos la plantilla para el componente
const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
}
p {
  text-align: center;
  font-weight: normal;
}
img {
  width: 100%;
  height: auto;
}
</style>
<p id="nombre"></p>
<p id="antecedentes"></p>
<p id="tipo"></p>
<img id="imagen" />
<p id="localizacion"></p>
`;

// Definimos la clase para el componente
class BienPatrimonial extends HTMLElement {
  constructor() {
    super();
    // Crea un shadow root para el componente
    this.attachShadow({ mode: 'open' });
     // Añade la plantilla al shadow root
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // Define los atributos observados para el componente
  static get observedAttributes() {
    return ['data'];
  }

  // Se llama cuando cambia un atributo observado
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data') {
      // Parsea los datos del atributo y los usa para actualizar el componente
      const data = JSON.parse(newValue);
      // Actualiza los elementos del componente con los datos
      this.shadowRoot.getElementById('nombre').textContent = data.nombre;
      this.shadowRoot.getElementById('antecedentes').textContent = data.antecedentes;
      this.shadowRoot.getElementById('tipo').textContent = `${data.tipo.arquitectura} - ${data.tipo.época}`;
      this.shadowRoot.getElementById('imagen').src = data.img;
      this.shadowRoot.getElementById('localizacion').textContent = `${data.localizacion.lat}, ${data.localizacion.long}`;
    }
  }
}

// Registramos el nuevo elemento personalizado
customElements.define('bien-patrimonial', BienPatrimonial);