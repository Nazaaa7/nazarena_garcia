import "./style.css";

// Obtener el formulario de registro
const $form = document.getElementById("register-form");

// Añadir un evento de submit al formulario
$form.addEventListener("submit", async (e) => {

  // Evitar que el formulario recargue la página
  e.preventDefault();

  // Crear un objeto FormData con los datos del formulario
  const formData = new FormData($form);

  // Convertir el objeto FormData a un objeto plano
  const entries = Object.fromEntries(formData.entries());

  fetch("http://localhost:4321/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entries),
  }).then(async (response) => {
    const data = await response.json(); 
    if (response.ok) {
      window.alert("Registrado");
      window.location.href = "/pages/login";
    } else {
      console.error("Error:", data);
      window.alert("Error al registrarse: " + data);
    }
  }).catch((error) => {
    console.error("Error en la solicitud:", error);
    window.alert("Error al registrarse");
  });
  })


