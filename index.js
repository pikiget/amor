// Referencias
const input = document.querySelector("#loginBox input");
const botones = document.querySelectorAll(".calculadora button");

// Contraseña correcta
const PASSWORD = "260725";

// Lógica de botones
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (valor === "⌫") {
      input.value = input.value.slice(0, -1); // borrar último carácter
    } else if (valor === "↵") {
      // Validar contraseña
      if (input.value === PASSWORD) {
        Swal.fire({
          icon: "success",
          title: "¡Correcto! 💖",
          text: "Has ingresado la contraseña correcta 🎉",
          confirmButtonColor: "#ff4e6f"
        }).then(() => {
          // Redirigir después de cerrar el mensaje
          window.location.href = "mensaje.html";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "La contraseña es incorrecta 😢",
          confirmButtonColor: "#ff4e6f"
        });
        input.value = ""; // limpiar
      }
    } else {
      input.value += valor; // agregar número
    }
  });
});
