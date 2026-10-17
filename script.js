console.log("¿Espias mi pagina?");

const contadorH2 = document.getElementById("contador");
const boton = document.getElementById("btn-clic");

let numero = 0;

boton.addEventListener("click", function() {
    numero++;
    contadorH2.textContent = numero;
});