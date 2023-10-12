
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
  

  const url = 'https://www.dolarhoy.com/api/api.php?type=valoresprincipales';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const dolarOficialCompra = data[0].casa.compra;
      const dolarOficialVenta = data[0].casa.venta;
      console.log(`Compra: ${dolarOficialCompra}, Venta: ${dolarOficialVenta}`);
  })
  .catch(error => console.error('Error:', error));