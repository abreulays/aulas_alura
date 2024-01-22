let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById ('valor-total').textContent = 'R$ 0';

function adicionar() {
  //recuperar valores nome do produto, quantidade e valor

  // atualiza o valor total
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidadeProduto = document.getElementById("quantidade").value;
  //calcular o p-reço, o nosso subtotal
  let preco = quantidade.value * valorUnitario;
  let carrinho = document.getElementById("lista-produtos");
  // adicionar esse produto no carrinho
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent =  `R$ ${totalGeral}`;
document.getElementById ('quantidade').value = 0;

}

function limpar() {}
