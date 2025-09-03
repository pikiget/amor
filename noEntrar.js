document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll("#botones button");

    // Botón "Perdón mi amor 😣"
    botones[0].addEventListener("click", () => {
        Swal.fire({
            title: "Okay mi amor ❤️",
            text: "Te perdono, pero por desobediente resolverás un cuestionario 😏",
            icon: "success",
            confirmButtonText: "Iniciar 📖"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "cuestionario.html"; // 👉 redirige al cuestionario
            }
        });
    });

    // Botón "Porque quiero 😒"
    botones[1].addEventListener("click", () => {
        Swal.fire({
            title: "Está bien 😒",
            text: "Entonces de castigo resolverás este cuestionario 😤",
            icon: "warning",
            confirmButtonText: "Iniciar 📖"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "cuestionario.html"; // 👉 redirige al mismo cuestionario
            }
        });
    });
});
