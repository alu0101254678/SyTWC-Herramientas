// Carga los datos de los bienes
fetch('https://demo4085396.mockable.io')
  .then(response => response.json())
  .then(data => {
    // Crea un componente para cada bien
    data.bienes.forEach(bien => {
      const bienElement = document.createElement('bien-patrimonial');
      bienElement.setAttribute('data', JSON.stringify(bien));
      document.getElementById('container').appendChild(bienElement);
    });
  });