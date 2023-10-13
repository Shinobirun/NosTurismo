
document.addEventListener('DOMContentLoaded', function() {
    var avion = document.createElement('img');
    avion.src = '../'; // Ruta a la imagen del avión
    avion.className = 'avion';
    document.body.appendChild(avion);
  
    document.addEventListener('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;
      avion.style.left = x + 'px';
      avion.style.top = y + 'px';
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navHamburguer = document.querySelector('.nav-hamburguer');

    hamburgerMenu.addEventListener('click', function() {
        console.log('Click en el menú hamburguesa');
        navHamburguer.classList.toggle('active');
        console.log('Clase active toggled');
    });

    // Para hacer visible el elemento al cargar la página
    navHamburguer.style.display = 'block'; // o 'flex', o cualquier otro valor que sea apropiado para tu diseño
});


// api dolar hoy

document.addEventListener('DOMContentLoaded', function() {
  const dolarValueElement = document.getElementById('dolar-value');

  // Realizar la solicitud a la API de Dólar Hoy
  fetch('https://www.dolarhoy.com/api.php')
      .then(response => response.json())
      .then(data => {
          const dolarValue = data.venta; // Aquí puedes acceder al valor de compra, venta, etc.
          dolarValueElement.innerText = `El valor del dólar en Argentina es: ${dolarValue}`;
      })
      .catch(error => {
          console.error('Error al obtener el valor del dólar:', error);
          dolarValueElement.innerText = 'No se pudo obtener el valor del dólar en este momento.';
      });
});
  

