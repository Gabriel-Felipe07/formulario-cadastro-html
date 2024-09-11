// Seleciona o campo de cor e o h1
const colorPicker = document.getElementById('color');
const title = document.getElementById('title');
const baseBoard = document.getElementById('baseboard');

// Função para converter cor hex para RGB
function hexToRgb(hex) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

// Função para calcular a luminância da cor
function calculateLuminance({ r, g, b }) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

// Adiciona um evento que captura a mudança de cor
colorPicker.addEventListener('input', function () {
  // Aplica a cor de fundo ao body
  document.body.style.backgroundColor = colorPicker.value;

  // Verifica se a cor escolhida é escura ou clara
  const rgb = hexToRgb(colorPicker.value);
  const luminance = calculateLuminance(rgb);

  if (luminance < 128) {
    title.style.color = 'white'; // alterando a cor do texto h1 para branco, caso a luminância seja menor que 128
    baseBoard.style.color = 'white'; //alterando a cor do texto footer para branco, caso a luminância seja maior que 128
  } else {
    title.style.color = 'black'; //alterando a cor do texto h1 para preto, caso a luminância seja maior que 128
    baseBoard.style.color = 'black'; //alterando a cor do texto footer para preto, caso a luminância seja maior que 128
  }
});