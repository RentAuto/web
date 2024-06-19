document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const entrega = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    // Mostrar el resumen de los datos
    document.getElementById("summaryName").textContent = name;
    document.getElementById("summaryEmail").textContent = email;
    document.getElementById("summaryTelefono").textContent = telefono;
    document.getElementById("summaryTime").textContent = entrega;
    document.getElementById("summaryMessage").textContent = message;

    // Mostrar el contenedor del resumen
    document.getElementById("summary").style.display = "block";
  });
