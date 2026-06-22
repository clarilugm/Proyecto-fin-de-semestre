
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


//JUEGO DOS
function corregirQuizPostre(){

  const q1 = document.querySelector('input[name="q1-postre"]:checked');
  const q2 = document.querySelector('input[name="q2-postre"]:checked');
  const q3 = document.querySelector('input[name="q3-postre"]:checked');

  if(!q1 || !q2 || !q3){
    document.getElementById("resultadoQuiz").innerHTML =
    "Respondé todas las preguntas.";
    return;
  }

  let tiramisu = 0;
  let gelato = 0;
  let cannoli = 0;

  const respuestas = [q1.value, q2.value, q3.value];

  respuestas.forEach(r => {
    if(r === "tiramisu") tiramisu++;
    if(r === "gelato") gelato++;
    if(r === "cannoli") cannoli++;
  });

  let resultado = "";
  let mensaje = "";

  if(tiramisu >= gelato && tiramisu >= cannoli){
    resultado = "Tiramisú";
    mensaje = "Café, intensidad y personalidad.";
  }
  else if(gelato >= cannoli){
    resultado = "Gelato";
    mensaje = "Fresco, dulce y equilibrado.";
  }
  else{
    resultado = "Cannoli";
    mensaje = "Tradición y dulzura, clásico.";
  }

  document.getElementById("resultadoQuizPostre").innerHTML =
    `Tu postre es: <strong>${resultado}</strong><br>${mensaje}`;
}
