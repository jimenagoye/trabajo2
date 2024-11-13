// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableRows = document.querySelectorAll("#tabla tbody tr");

    // Función para actualizar los valores en la tabla
    function updateTable(fieldId, value) {
        tableRows.forEach(row => {
            if (row.cells[0].innerText === fieldId) {
                row.cells[1].innerText = value;
            }
        });
    }

    // Asignar evento input a cada campo
    form.elements.forEach(input => {
        input.addEventListener("input", (event) => {
            updateTable(event.target.name, event.target.value);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const leerMasBtn = document.getElementById("leer-mas");
    const curriculumCompleto = document.getElementById("curriculum-completo");

    leerMasBtn.addEventListener("click", function () {
        if (curriculumCompleto.style.display === "none") {
            curriculumCompleto.style.display = "block";
            leerMasBtn.textContent = "Leer menos";
        } else {
            curriculumCompleto.style.display = "none";
            leerMasBtn.textContent = "Leer más";
        }
    });
});