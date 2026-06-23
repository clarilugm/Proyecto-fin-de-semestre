const form = document.getElementById("form-comentario");
const lista = document.getElementById("lista-comentarios");

form.addEventListener("submit", function(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;

  const nuevoComentario = document.createElement("div");
  nuevoComentario.className = "comentario";
  nuevoComentario.innerHTML = "<strong>" + nombre + "</strong><p>" + mensaje + "</p>";

  lista.appendChild(nuevoComentario);

  form.reset();
});

const btnRandom = document.getElementById('btn-random-song');
const player = document.getElementById('player');
const audioControls = document.getElementById('audio-controls');
const reproTitle = document.getElementById('repro-title');
const reproDesc = document.getElementById('repro-desc');
const reproPortada = document.getElementById('repro-portada');

const canciones = [
    {
        cancion: 'sound_1.mp3',
        titulo: 'Like Animals',
        portada: 'like-animals.jpeg',
        descripcion: 'La letra transmite una sensación de libertad y autenticidad. Invita a dejar de lado las apariencias, aceptar los defectos propios y vivir intensamente siguiendo los instintos y deseos personales.'
    },
    {
        cancion: 'sound_2.mp3',
        titulo: 'Come Over',
        portada: 'come-over.jpeg',
        descripcion: 'La canción expresa el deseo de estar cerca de alguien especial y compartir momentos juntos. Habla de la atracción, la conexión emocional y la necesidad de compañía.'
    },
    {
        cancion: 'sound_3.mp3',
        titulo: 'Dynamite',
        portada: 'dynamite.jpeg',
        descripcion: 'Es una canción alegre y optimista que busca transmitir energía positiva y felicidad. Su mensaje principal es disfrutar la vida, divertirse y mantener una actitud positiva incluso en tiempos difíciles.'
    },
    {
        cancion: 'sound_5.mp3',
        titulo: 'Life Goes On',
        portada: 'life-goes-on.jpeg',
        descripcion: 'Fue escrita durante la pandemia y transmite un mensaje de esperanza. Reconoce que la vida puede cambiar inesperadamente, pero recuerda que, a pesar de las dificultades, debemos seguir adelante porque la vida continúa.'
    },
    
    {
        cancion: 'sound_7.mp3',
        titulo: 'Silver Spoon',
        portada: 'silver-spoon.jpeg',
        descripcion: 'La canción critica las desigualdades sociales y económicas. Habla de los jóvenes que deben esforzarse mucho más y cuestiona las ventajas que tienen las personas nacidas en familias privilegiadas.'
    }
];

let ultimaCancion = -1;

btnRandom.addEventListener('click', () => {
    let cancionRandom = Math.floor(Math.random() * canciones.length);
    if (canciones.length > 1) {
        while (cancionRandom === ultimaCancion) {
            cancionRandom = Math.floor(Math.random() * canciones.length);
        }
    }

    ultimaCancion = cancionRandom;
    const cancion = canciones[cancionRandom];
    const ubicacionAudio = `../sound/post-musica/${cancion.cancion}`;

    if (player) {
        player.src = ubicacionAudio;
        audioControls.style.display = 'block';
        player.play();
    }

    reproTitle.innerHTML = `Estás escuchando <br><strong>${cancion.titulo}</strong></br>`;
    reproDesc.textContent = cancion.descripcion;
    reproPortada.src = `../images/Post-musica/${cancion.portada}`;
    reproPortada.style.display = 'block';
    btnRandom.textContent = 'Reproducir otra canción';
});