// Mensaje al cargar la página
console.log("Sitio del abogado cargado correctamente.");

// Opcional: mostrar alerta al enviar formulario
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // evitar recarga
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
});


