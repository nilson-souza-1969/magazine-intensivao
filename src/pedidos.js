import { lerLocalStorage } from './utilidades';
import { desenharProdutoCarrinhoSimples } from './utilidades';

function criarHistoricoPedido(pedidoComData) {
    const containerPedidos = `container-pedidos-${new Date(
        pedidoComData.dataPedido,
    ).toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    })}`;

    const elementoPedido = `<p class='text-xl text-bold my-4'>${containerPedidos}</p>
        <section id='${containerPedidos}' class='bg-slate-300 p-3 rounded-md'></section>`;

    const main = document.getElementsByTagName('main')[0];

    const main0 = document.getElementsByTagName('main')[0];

    main.innerHTML += elementoPedido;

    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoCarrinhoSimples(
            idProduto,
            containerPedidos,
            pedidoComData.pedido[idProduto],
        );
    }
}

function renderizarHistoricoPedidos() {
    const historico = lerLocalStorage('historico');

    for (const pedidoComData of historico) {
        criarHistoricoPedido(pedidoComData);
    }
}

renderizarHistoricoPedidos();
