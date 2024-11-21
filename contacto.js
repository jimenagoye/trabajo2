document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const table = document.querySelector("#tabla tbody");

    function updateTable(fieldId, value) {
        const row = table.querySelector(`tr[data-field="${fieldId}"]`);
        if (row) {
            row.cells[1].innerText = value;
        }
    }

    form.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], input[type='number'], textarea").forEach(input => {
        input.addEventListener("input", (event) => {
            updateTable(event.target.name, event.target.value);
        });
    });

    form.querySelector("input[name='provincia']").addEventListener("input", (event) => {
        updateTable(event.target.name, event.target.value);
    });

    form.querySelectorAll("input[type='radio'][name='contacto']").forEach(radio => {
        radio.addEventListener("change", (event) => {
            if (event.target.checked) {
                updateTable("contacto", event.target.nextSibling.textContent.trim());
            }
        });
    });

    form.querySelectorAll("input[type='checkbox'][name='suscripcion[]']").forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const selectedOptions = Array.from(form.querySelectorAll("input[type='checkbox'][name='suscripcion[]']:checked"))
                .map(cb => cb.nextSibling.textContent.trim())
                .join(", ");
            updateTable("suscripcion", selectedOptions || "Ninguno");
        });
    });
});