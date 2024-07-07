const produto = document.querySelector('.container-produto')

function openProduto() {
    produto.classList.add('active')
}

function closeProduto() {
    produto.classList.remove('active')
}