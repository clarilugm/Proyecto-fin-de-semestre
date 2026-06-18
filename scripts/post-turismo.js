  const datos = [
        "Francia lleva más de 30 años siendo el país más visitado del mundo.",
        "En 2024 superó los 100 millones de turistas en un solo año, un récord histórico.",
        "A pesar de ser el más visitado, Estados Unidos genera casi 3 veces más dinero en turismo.",
        "En agosto, hasta los propios franceses se van de vacaciones y París se vacía.",
        "Un almuerzo en Francia puede durar dos horas. Pedir la cuenta antes de tiempo se considera de mala educación."
      ];

      let indice = 0;

      function mostrarDato() {
        indice = (indice + 1) % datos.length;
        document.getElementById("dato").textContent = datos[indice];
      }