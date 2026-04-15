// Exercício 4: filtros na foto
const selectFiltro = document.querySelector('#filtro-da-foto');
selectFiltro.addEventListener('input', () => {
  document.querySelector('.foto-anotada > img').style.filter = selectFiltro.value;
});

// Desafio 1: trocar a foto por arquivo do usuário
const inputImagem = document.querySelector('#imagem');
inputImagem.addEventListener('change', () => {
  const file = inputImagem.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    document.querySelector('.foto-anotada > img').src = e.target.result;
  };
  reader.readAsDataURL(file);
});
