const balaozinho = document.querySelector('#balaozinho');
const marcacoes = document.querySelectorAll('.marcacao');

for (const marcacao of marcacoes) {
  marcacao.addEventListener('mouseover', () => {
    balaozinho.innerHTML = `<h2>${marcacao.dataset.titulo}</h2><p>${marcacao.dataset.conteudo}</p>`;
    balaozinho.style.color = marcacao.dataset.cor;
  });

  marcacao.addEventListener('mouseout', () => {
    balaozinho.innerHTML = '';
  });

  marcacao.addEventListener('mousemove', (e) => {
    balaozinho.style.left = e.pageX + 'px';
    balaozinho.style.top = e.pageY + 'px';
  });
}
