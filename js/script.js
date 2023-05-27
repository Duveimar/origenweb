// JavaScript

// Event listener para enviar el formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que la página se recargue al enviar el formulario
  
  // Obtener los valores de los campos del formulario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Aquí puedes realizar cualquier acción adicional, como enviar los datos a un servidor
  
  // Mostrar un mensaje de éxito
  alert("Formulario enviado con éxito");
  
  // Limpiar los campos del formulario
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});

// Event listener para el botón "Haz clic"
document.querySelector("button").addEventListener("click", function() {
  cambiarMensaje();
});

// Función para cambiar el mensaje del párrafo
function cambiarMensaje() {
  var mensaje = document.getElementById("mensaje");
  mensaje.textContent = "¡Has hecho clic!";
}




