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
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['data'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data') {
      const data = JSON.parse(newValue);
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