import { adicionarAoCarrinho } from './menuCarrinho';
import { catalogo } from './utilidades';

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div id="card-produto-${produtoCatalogo.id}" class="border-solid w-48 m-2 flex flex-col justify-between p-2 shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}">
<img
src="./assets/img/${produtoCatalogo.imagem}"
alt="Produto ${produtoCatalogo.id} do Magazine Hashtag."
class="group-hover:scale-110 duration-300 mx-1 my-2 rounded-lg"
/>
<p class="text-sm">${produtoCatalogo.marca}</p>
<p class="text-sm">${produtoCatalogo.nome}</p>
<p class="text-sm">$${produtoCatalogo.preco}</p>
<button id="btn-adicionar-${produtoCatalogo.id}" class="bg-slate-950 text-slate-200 cursor-pointer hover:bg-slate-700 rounded-md"><i class="fa-solid fa-cart-plus"></i></button>
</div>`;

        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }

    for (const produtoCatalogo of catalogo) {
        document
            .getElementById(`btn-adicionar-${produtoCatalogo.id}`)
            .addEventListener('click', () =>
                adicionarAoCarrinho(produtoCatalogo.id),
            );
    }
}
