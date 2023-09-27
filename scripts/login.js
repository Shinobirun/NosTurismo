document.addEventListener('DOMContentLoaded', function() {
    var mostrarModal = false;
  
    document.getElementById('loginButton').addEventListener('click', function() {
        // Agregar la lógica para autenticar al usuario
        // enviar una solicitud POST a tu backend
        // y manejar la respuesta
        alert('Iniciando sesión...');
    });
  
   

        document.getElementById('closeButton').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });
