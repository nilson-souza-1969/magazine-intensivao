import { renderizarCatalogo } from './cartaoProduto';
import { inicializarFiltros } from './filtrosCatalogo';
import {
    inicializarCarrinho,
    atualizarPrecoCarrinho,
    renderizarProdutosCarrinho,
} from './menuCarrinho';

renderizarCatalogo();

inicializarCarrinho();

renderizarProdutosCarrinho();

atualizarPrecoCarrinho('preco-total');

inicializarFiltros();
