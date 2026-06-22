function mostrar(mensaje) {
  document.getElementById("texto-calificacion").textContent = mensaje;
}

document.getElementById("carita1").onclick = function () {
  mostrar("Lamentamos que no te haya gustado. Intentaremos mejorar la próxima");
};

document.getElementById("carita2").onclick = function () {
  mostrar("Gracias por tu devolución, intentaremos mejorar la próxima");
};

document.getElementById("carita3").onclick = function () {
  mostrar("Gracias por tu devolución, nos alegra que te haya gustado");
};

document.getElementById("carita4").onclick = function () {
  mostrar("Gracias por tu buena devolución, nos alegra que te haya gustado");
};

document.getElementById("carita5").onclick = function () {
  mostrar("¡Gracias por tu devolución, nos alegra que te haya gustado tanto!");
};