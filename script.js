document.addEventListener("DOMContentLoaded", () => {
    const botonLeerMas = document.getElementById("boton-leer-mas");
    const contenidoCompleto = document.getElementById("curriculum-completo");
    
    if (!botonLeerMas || !contenidoCompleto) {
    console.error("No se encontró el botón o el contenedor del currículum completo.");
    return;
    }
    
    botonLeerMas.addEventListener("click", () => {
    if (contenidoCompleto.classList.contains("show")) {
    contenidoCompleto.classList.remove("show"); // Ocultar contenido
    botonLeerMas.textContent = "Leer más";
    } else {
    contenidoCompleto.classList.add("show"); // Mostrar contenido
    botonLeerMas.textContent = "Leer menos";
    }
    });
    });

    // Seleccionar la flecha
    const flecha = document.querySelector('.flecha');

    // Agregar el evento de clic
    flecha.addEventListener('click', () => {
        // Hacer scroll hacia arriba suavemente
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });