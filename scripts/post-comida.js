
function corregirQuiz(){

  let puntos = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  if(!q1 || !q2 || !q3){
    document.getElementById("resultadoQuiz").innerHTML =
    "Respondé todas las preguntas.";
    return;
  }

  puntos += Number(q1.value);
  puntos += Number(q2.value);
  puntos += Number(q3.value);

  let mensaje = "";

  if (puntos === 3) {
    mensaje = "¡Excelente! Sos un experto en gastronomía italiana";
  } else if (puntos === 2) {
    mensaje = "Conocés bastante sobre la cocina italiana!";
  } else {
    mensaje = "Podés seguir aprendiendo sobre la gastronomía italiana...";
  }

  document.getElementById("resultadoQuiz").innerHTML =
    `Obtuviste ${puntos} de 3 respuestas correctas.<br>${mensaje}`;
}
