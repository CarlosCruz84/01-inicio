import { Componente } from "./Componente.js";

const elementoBotoes = document.querySelectorAll('.cabecalho__menu__item');
let botaoAtivo = elementoBotoes[0];

const titulo = new Componente('h1', document.querySelector('.cabecalho__titulo'), true);

const secao = new Componente('section', document.querySelector('.principal'), true);
secao.elemento.classList.add('principal__conteudo');

for (let i = 0; i < elementoBotoes.length; i++) {
    elementoBotoes[i].addEventListener('click', function () {

        // const secao = new Componente('section', document.querySelector('.principal'), true);
        // secao.elemento.classList.add('principal__conteudo');

        botaoAtivo.classList.remove('ativo');
        botaoAtivo = elementoBotoes[i];
        elementoBotoes[i].classList.add('ativo');
        titulo.elemento.textContent = textoshtml[i].titulo;
        secao.elemento.innerHTML = textoshtml[i].secao;
    });
}

const textoshtml = [
    {
        titulo: `João - Página de Treinamento`,
        secao: `<h1 class="principal__conteudo__texto">Responsividade em Páginas Web</h1><p class="principal__conteudo__texto">Ao desenvolver páginas da internet, uma boa prática é ajustar os elementos para que se ajustem a diferentes tamanhos de tela, seja com o uso de unidades relativas ou até com a alteração do layout da página para exibição em telas mais estreitas.</p><p class="principal__conteudo__texto">Todas as configurações de ajuste da página podem ser feitas em CSS, e alteradas dinamicamente em determinadas situações com o auxílio de Javascript. Contudo, o próprio CSS nos permite criar estilizações de página excelentes.</p>`
    },
    {
        titulo: `Sobre Mim`,
        secao: `<h1 class="principal__conteudo__texto">Breve Histórico:</h1><p class="principal__conteudo__texto">Nascido em 1993, tenho atualmente 31 anos. Após 10 anos atuando como controlador de tráfego aéreo, estou iniciando uma nova carreira no BB, sendo designado inicialmente para atuar como desenvolvedor front-end.</p><p class="principal__conteudo__texto">Durante as primeiras semanas de treinamento, tive a oportunidade de realizar ótimos cursos na plataforma Alura para desenvolvimento com HTML e CSS, o que me permitiu criar esta página.</p>`
    },
    {
        titulo: `Projetos`,
        secao: `<h1 class="principal__conteudo__botao"><a class="principal__conteudo__botao" href="https://03-tabela.vercel.app/">Tabela de Estoque</a></h1>`
    }
];

window.onload = () => {
    elementoBotoes[0].click();
}