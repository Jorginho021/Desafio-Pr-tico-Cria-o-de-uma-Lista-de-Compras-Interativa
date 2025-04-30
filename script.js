const form = document.getElementById('form');
const produtoInput = document.getElementById('produto');
const quantidadeInput = document.getElementById('quantidade');
const listaItens = document.getElementById('lista-itens');
const limparBtn = document.getElementById('limpar-lista');


form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const produto = produtoInput.value.trim();
  const quantidade = parseInt(quantidadeInput.value);


  if (produto === '' || isNaN(quantidade) || quantidade < 1) {
    alert('Por favor, preencha o produto e uma quantidade válida.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${produto} (${quantidade})`;

  
  li.addEventListener('click', function () {
    li.classList.toggle('riscado');
  });

  listaItens.appendChild(li);

  
  produtoInput.value = '';
  quantidadeInput.value = '1';
  produtoInput.focus();
});


limparBtn.addEventListener('click', function () {
  listaItens.innerHTML = '';
});
