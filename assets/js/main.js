
// ticker
const tickerMove = document.querySelector('.ticker__move');
  const clone = tickerMove.innerHTML;
  tickerMove.innerHTML += clone;

// performance-explorer
  const range = document.getElementById('rangeInput');
  const value = document.getElementById('rangeValue');

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function updateSlider() {
    value.textContent = formatNumber(range.value);

    const percent = (range.value - range.min) / (range.max - range.min) * 100;
    range.style.background = `linear-gradient(to right, #1e6dfb ${percent}%, #ccc ${percent}%)`;
  }

  range.addEventListener('input', updateSlider);
  updateSlider();