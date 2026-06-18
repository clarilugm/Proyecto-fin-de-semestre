const btn = document.getElementById("btn-comentar");
const nombre = document.getElementById("nombre");
const texto = document.getElementById("texto");
const error = document.getElementById("error-msg");
const lista = document.getElementById("lista-comentarios");

btn.addEventListener("click", () => {

    if (nombre.value.trim() === "" || texto.value.trim() === "") {
        error.style.display = "block";
        return;
    }
    error.style.display = "none";
    lista.innerHTML += `
        <div class="comentario">
            <strong>${nombre.value}</strong>
            <p>${texto.value}</p>
        </div>
    `;
    nombre.value = "";
    texto.value = "";
});

