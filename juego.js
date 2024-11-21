// Cuando se cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    const tablero = document.getElementById("juego-memoria");
    const botonReiniciar = document.getElementById("reiniciar");
    const copa = document.getElementById("copa");

    // Array de imágenes únicas para las cartas
    const imagenes = [
        "https://www.mondosonoro.com/wp-content/uploads/2024/05/Ca7riel-Paco-Amoroso-Banyo-Maria.jpg",
        "https://th.bing.com/th/id/OIP.OZ_zuLiEzyqgzaf39JuT9QHaHa?rs=1&pid=ImgDetMain",
        "https://m.media-amazon.com/images/I/71ODbZdETaS.jpg",
        "https://th.bing.com/th/id/R.347e8b2937baef43cda58599146747e5?rik=gm8wJtgnYOiTlQ&riu=http%3a%2f%2fmp3.hhgroups.com%2falbumes%2fDuki-Super-sangre-joven-53190_front.jpg&ehk=hk0u7r4Q7bz%2fhn9jHrzO2zFl%2boo4iIxIaXtvgrpq1uI%3d&risl=&pid=ImgRaw&r=0",
        "https://i.ytimg.com/vi/4cLaAuK-AaY/maxresdefault.jpg",
        "https://i.discogs.com/2Sj8umOggq9Wg0J7jOejOKrshwo2_ct36nG3icrjjdw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTYyOTUw/NS0xNTY5MjU4MTMy/LTE4MzkuanBlZw.jpeg",
        "https://www.tonyaguilar.es/wp-content/archivos/one-direction.jpg",
        "https://www.rmujeres.cl/wp-content/uploads/2021/03/Gustavo-Cerati-Ahi-Vamos-400x400.jpeg"
    ];

    let cartasVolteadas = [];
    let parejasAcertadas = 0;

    // Función para crear el tablero
    function crearTablero() {
        const cartas = [...imagenes, ...imagenes]; // Duplicar las imágenes para formar parejas
        const baraja = cartas.sort(() => Math.random() - 0.5); // Mezclar cartas
        tablero.innerHTML = ""; // Limpiar tablero

        baraja.forEach((imagen, index) => {
            const carta = document.createElement("div");
            carta.classList.add("carta");
            carta.dataset.imagen = imagen;

            // Crear el lado trasero de la carta
            const trasera = document.createElement("div");
            trasera.classList.add("trasera");

            // Crear el lado frontal con la imagen
            const frontal = document.createElement("div");
            frontal.classList.add("frontal");
            const img = document.createElement("img");
            img.src = imagen;
            img.alt = "Imagen de carta";
            frontal.appendChild(img);

            carta.appendChild(trasera);
            carta.appendChild(frontal);
            carta.addEventListener("click", manejarClick);
            tablero.appendChild(carta);
        });
    }

    // Función para manejar clics en cartas
    function manejarClick(e) {
        const carta = e.currentTarget;

        if (carta.classList.contains("volteada") || carta.classList.contains("acertada") || cartasVolteadas.length >= 2) {
            return;
        }

        carta.classList.add("volteada");
        cartasVolteadas.push(carta);

        if (cartasVolteadas.length === 2) {
            verificarPareja();
        }
    }

    // Función para verificar si hay una pareja
    function verificarPareja() {
        const [carta1, carta2] = cartasVolteadas;

        if (carta1.dataset.imagen === carta2.dataset.imagen) {
            carta1.classList.add("acertada");
            carta2.classList.add("acertada");
            parejasAcertadas++;

            if (parejasAcertadas === imagenes.length) {
                setTimeout(() => {
                    copa.style.display = 'block'; // Mostrar la copa al ganar
                }, 500);
            }
        } else {
            setTimeout(() => {
                carta1.classList.remove("volteada");
                carta2.classList.remove("volteada");
            }, 1000);
        }

        cartasVolteadas = [];
    }

    // Reiniciar el juego
    botonReiniciar.addEventListener("click", () => {
        parejasAcertadas = 0;
        cartasVolteadas = [];
        copa.style.display = 'none'; // Ocultar la copa
        crearTablero();
    });

    // Crear el tablero inicial
    crearTablero();
});