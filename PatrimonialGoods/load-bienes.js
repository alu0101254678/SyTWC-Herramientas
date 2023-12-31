// Carga los datos de los bienes
fetch('https://demo4085396.mockable.io')
  .then(response => response.json())
  .then(data => {
    // Crea un componente para cada bien
    data.bienes.forEach(bien => {
      // Crea un nuevo elemento 'bien-patrimonial'
      const bienElement = document.createElement('bien-patrimonial');
      // Añade los datos del bien como un atributo al elemento
      bienElement.setAttribute('data', JSON.stringify(bien));
      // Añade el elemento al contenedor en la página
      document.getElementById('container').appendChild(bienElement);
    });
  });