
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
  