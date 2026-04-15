// Exercício 0: ocultar/mostrar marcações
const checkboxVisibilidade = document.querySelector('#visibilidade-das-marcacoes');
checkboxVisibilidade.addEventListener('input', () => {
  document.body.classList.toggle(checkboxVisibilidade.value, checkboxVisibilidade.checked);
});

// Exercícios 2 e 3: selecionar marcação e controles
const marcacoes = document.querySelectorAll('.marcacao');
let marcacaoSelecionada = document.querySelector('.marcacao.selecionada');

function atualizaControles(marcacaoEl) {
  document.querySelector('#x-da-marcacao').value = parseInt(marcacaoEl.style.left);
  document.querySelector('#y-da-marcacao').value = parseInt(marcacaoEl.style.top);
  document.querySelector('#largura-da-marcacao').value = parseInt(marcacaoEl.style.width);
  document.querySelector('#altura-da-marcacao').value = parseInt(marcacaoEl.style.height);

  document.querySelector('#titulo-da-marcacao').value = marcacaoEl.dataset.titulo;
  document.querySelector('#conteudo-da-marcacao').value = marcacaoEl.dataset.conteudo;
  document.querySelector('#cor-da-marcacao').value = marcacaoEl.dataset.cor;

  const formato = marcacaoEl.classList.contains('formato-oval') ? 'formato-oval' : 'formato-retangular';
  document.querySelector(`input[name="formato-da-marcacao"][value="${formato}"]`).checked = true;
}

function atualizaMarcacao(marcacaoEl) {
  marcacaoEl.style.left = document.querySelector('#x-da-marcacao').value + 'px';
  marcacaoEl.style.top = document.querySelector('#y-da-marcacao').value + 'px';
  marcacaoEl.style.width = document.querySelector('#largura-da-marcacao').value + 'px';
  marcacaoEl.style.height = document.querySelector('#altura-da-marcacao').value + 'px';

  marcacaoEl.dataset.titulo = document.querySelector('#titulo-da-marcacao').value;
  marcacaoEl.dataset.conteudo = document.querySelector('#conteudo-da-marcacao').value;
  marcacaoEl.dataset.cor = document.querySelector('#cor-da-marcacao').value;

  const formatoSelecionado = document.querySelector('input[name="formato-da-marcacao"]:checked').value;
  marcacaoEl.classList.remove('formato-oval', 'formato-retangular');
  marcacaoEl.classList.add(formatoSelecionado);
}

if (marcacaoSelecionada) {
  atualizaControles(marcacaoSelecionada);
}

for (const marcacao of marcacoes) {
  marcacao.addEventListener('click', () => {
    if (marcacaoSelecionada) {
      marcacaoSelecionada.classList.remove('selecionada');
    }
    marcacao.classList.add('selecionada');
    marcacaoSelecionada = marcacao;
    atualizaControles(marcacao);
  });
}

const inputsDeControle = document.querySelectorAll('input:not([type="checkbox"]), textarea');
for (const input of inputsDeControle) {
  input.addEventListener('input', () => {
    if (marcacaoSelecionada) {
      atualizaMarcacao(marcacaoSelecionada);
    }
  });
}
