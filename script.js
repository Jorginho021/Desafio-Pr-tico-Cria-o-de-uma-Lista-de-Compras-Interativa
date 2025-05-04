document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const lista = document.getElementById("lista-itens");
  const botaoLimpar = document.getElementById("limpar-lista");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const produto = document.getElementById("produto").value.trim();
    const quantidade = document.getElementById("quantidade").value.trim();

    if (produto === "" || quantidade === "" || quantidade <= 0) {
      alert("Preencha os campos corretamente!");
      return;
    }

    const item = document.createElement("li");
    item.textContent = `${produto} - ${quantidade}`;
    
    item.addEventListener("click", () => {
      item.classList.toggle("comprado");
    });

    lista.appendChild(item);

    formulario.reset();
  });

  botaoLimpar.addEventListener("click", function () {
    lista.innerHTML = "";
  });
});
