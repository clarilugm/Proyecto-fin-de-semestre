var datos = [
  {
    texto: "Euphoria es un remake americano de una serie israelí del mismo nombre. Muy poca gente lo sabe porque la versión original casi no tuvo repercusión fuera de Israel.",
    imagen: "https://cdn.milenio.com/uploads/media/2026/04/11/sabias-euphoria-hbo-basada-serie.jpg"
  },
  {
    texto: "La escena de la pelea entre Rue y su mamá fue completamente improvisada. Sam Levinson les dijo que se fueran a la yugular pero no esperaba lo que pasó. Tuvo que salir del set después de la tercera toma porque no lo podía ver.",
    imagen: "https://variety.com/wp-content/uploads/2022/01/euphoria-season-2-zendaya.jpg"
  },
  {
    texto: "Hunter Schafer, la actriz que hace de Jules, no era actriz antes de Euphoria. Se enteró del casting por Instagram, fue su primer trabajo actoral y además co-escribió el episodio especial de Jules junto a Sam Levinson.",
    imagen: "https://variety.com/wp-content/uploads/2019/06/hunter-schafer-euphoria.jpg"
  },
  {
    texto: "Angus Cloud, el actor que hace de Fez, fue descubierto en la calle en Manhattan por la directora de casting. No estaba buscando trabajo como actor ni nada parecido. Euphoria fue su primer papel profesional.",
    imagen: "https://media.npr.org/assets/img/2023/08/01/angus-cloud_wide-b9b5a1e4e0a1a7b8e8c0e1b0a7a4b1b0a1a7b8e8.jpg"
  },
  {
    texto: "Angus Cloud, el actor que interpretaba a Fez, falleció el 31 de julio de 2023 a los 25 años. Su muerte fue uno de los golpes más duros para el elenco y los fans. La tercera temporada le rindió homenaje con imágenes inéditas de él junto a Zendaya.",
    imagen: "https://deadline.com/wp-content/uploads/2023/08/angus-cloud-euphoria.jpg"
  }
];

var indice = 0;

function mostrarDato() {
  document.getElementById("texto-dato").textContent = datos[indice].texto;
  document.getElementById("imagen-dato").src = datos[indice].imagen;
  document.getElementById("imagen-dato").style.display = "block";
  document.getElementById("caja-dato").style.display = "block";
  document.getElementById("boton-dato").textContent = "→ Ver otro dato";
  indice = (indice + 1) % datos.length;
}

var fotos = [
  { src: "https://i.redd.it/euphoria-behind-the-scenes-v0-odrwtpocxfxd1.jpg?width=672&format=pjpg&auto=webp&s=40e5ecef32bce10814f159634aed622f7be7199f", pie: "Detrás de escena de Euphoria" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdx7Tm8BGrgF1ZlfoKJezmltACh1gxth16A&s", pie: "Detrás de escena de Euphoria" },
  { src: "https://www.pikaramagazine.com/wp-content/uploads/2022/02/euphoria.jpg", pie: "Imagenes de la serie Euphoria" },
  { src: "https://wradio.com.mx/resizer/v2/GAGEKKOZ3JEOJHZQGALVMOUUTM.jpg?auth=838af3ae88c500f75ca2bc2153ade60895d5862fc37aee132e5c8f75ab3c930b&width=768&height=576&quality=70&smart=true", pie: "Imágenes de la serie Euphoria" },
  { src: "https://ucsdguardian.org/wp-content/uploads/2022/03/euphoria-s2-courtesy-of-Toms-Guide-900x506.jpeg", pie: "Imágenes de la serie Euphoria" }
];

var actual = 0;

document.getElementById("foto-carrusel").src = fotos[0].src;
document.getElementById("pie-carrusel").textContent = fotos[0].pie;

function cambiar(direccion) {
  actual = (actual + direccion + fotos.length) % fotos.length;
  document.getElementById("foto-carrusel").src = fotos[actual].src;
  document.getElementById("pie-carrusel").textContent = fotos[actual].pie;
}