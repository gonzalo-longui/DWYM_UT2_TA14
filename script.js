const lista = document.getElementById("listaAgregar");
const input = document.getElementById("inputTexto");
const boton = document.getElementById("botonAgregar");

boton.addEventListener("click", () => {
  let elementoLi = document.createElement("li");
  elementoLi.innerHTML = input.value;
  lista.appendChild(elementoLi);
  input.value = "";
})