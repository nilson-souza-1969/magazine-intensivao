import { atualizarPrecoCarrinho } from './menuCarrinho';
import {
    lerLocalStorage,
    desenharProdutoCarrinhoSimples,
    apagarDoLocalStorage,
    salvarLocalStorage,
} from './utilidades';

function desenharProdutosCheckout() {
    const idsProdutoCarrnhoComQuantidade = lerLocalStorage('carrinho') ?? {};

    for (const idProduto in idsProdutoCarrnhoComQuantidade) {
        desenharProdutoCarrinhoSimples(
            idProduto,
            'container-produtos-checkout',
            idsProdutoCarrnhoComQuantidade[idProduto],
        );
    }

    atualizarPrecoCarrinho('preco-total-checkout');
}

function finalizarCompra(evento) {
    evento.preventDefault();

    const idsProdutoCarrnhoComQuantidade = lerLocalStorage('carrinho') ?? {};

    if (Object.keys(idsProdutoCarrnhoComQuantidade).length === 0) {
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrnhoComQuantidade,
    };
    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage('historico', historicoDePedidosAtualizado);

    apagarDoLocalStorage('carrinho');

    window.location.href = './pedidos.html';
}

desenharProdutosCheckout();

document.addEventListener('submit', (event) => finalizarCompra(event));
