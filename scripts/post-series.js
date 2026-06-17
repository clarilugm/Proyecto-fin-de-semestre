var datos = [
  {
    texto: "Euphoria es un remake americano de una serie israelí del mismo nombre. Muy poca gente lo sabe porque la versión original casi no tuvo repercusión fuera de Israel.",
    imagen: "https://cdn.milenio.com/uploads/media/2026/04/11/sabias-euphoria-hbo-basada-serie.jpg"
  },
  
  {
    texto: "Hunter Schafer, la actriz que hace de Jules, no era actriz antes de Euphoria. Se enteró del casting por Instagram, fue su primer trabajo actoral y además co-escribió el episodio especial de Jules junto a Sam Levinson.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LmMmeUzs0lFJfN2OiWvl6gzAs9lMQ2nELg&s"
  },
  {
    texto: "Angus Cloud, el actor que hace de Fez, fue descubierto en la calle en Manhattan por la directora de casting. No estaba buscando trabajo como actor ni nada parecido. Euphoria fue su primer papel profesional.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsEofpfXGpitRiYJi2MtVGRU8SJpeIWaXLQ&s"
  },
  {
    texto: "Angus Cloud, el actor que interpretaba a Fez, falleció el 31 de julio de 2023 a los 25 años. Su muerte fue uno de los golpes más duros para el elenco y los fans. La tercera temporada le rindió homenaje con imágenes inéditas de él junto a Zendaya.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GgIPDoOKuoKP50hBB-_-eQICP-RsqjeQMw&s"
  }, 
  
{
  texto: "Euphoria terminó para siempre. El 31 de mayo de 2026, el mismo día que se emitió el último episodio de la temporada 3, HBO confirmó que era el final de la serie. Sam Levinson lo anunció en un podcast del New York Times horas antes. Siete años, tres temporadas, 26 episodios.",
  imagen: "https://planoamericano.com/wp-content/uploads/2026/06/Euphoria-final.webp"
}
];

var indice = 0;

function mostrarDato() {
  document.getElementById("texto-dato").textContent = datos[indice].texto;
  document.getElementById("imagen-dato").src = datos[indice].imagen;
  document.getElementById("imagen-dato").style.display = "block";
  document.getElementById("caja-dato").style.display = "block";
  document.getElementById("boton-dato").textContent = "Ver otro dato";
  indice = (indice + 1) % datos.length;
}

var fotos = [
  { src: "https://preview.redd.it/euphoria-behind-the-scenes-v0-3jkkrnncxfxd1.jpg?width=736&format=pjpg&auto=webp&s=faa8329098b2244acc55c7a008fffaa4f079c872", pie: "Detrás de escena de Euphoria" },
  { src: "https://preview.redd.it/euphoria-behind-the-scenes-v0-nkasnpncxfxd1.jpg?width=749&format=pjpg&auto=webp&s=2d7cd3facdb29f5b43c798f1b84efaa42a7e6893", pie: "Detrás de escena de Euphoria" },
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