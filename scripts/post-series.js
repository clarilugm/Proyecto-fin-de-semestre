var mensajes = [
  "Gracias por tu devolucion, intentaremos mejorar la próxima",
  "Gracias por tu devolucion, intentaremos mejorar la próxima",
  "Gracias por tu devolucin, nos alegra que te haya gustado",
  "Gracias por tu devolución, nos alegra que te haya gustado",
  "¡Gracias por tu devolución, nos alegra que te haya gustado tanto!"
];

var caritas = document.getElementsByClassName("estrella");

var i = 0;
while (i < caritas.length) {
  caritas[i].indice = i;
  caritas[i].onclick = function() {
    document.getElementById("texto-calificacion").textContent = mensajes[this.indice];
  };
  i = i + 1;
}