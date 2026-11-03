const input = document.getElementById('searchInput');
const info = document.getElementById('searchInfo');
const cards = document.querySelectorAll('.card');

input.addEventListener('input', () => {
  const q = input.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const hay = (card.dataset.title + ' ' + card.dataset.desc + ' ' + card.dataset.tags).toLowerCase();
    const show = !q || hay.includes(q);
    card.style.display = show ? 'flex' : 'none';
    if (show) visible++;
  });
  info.textContent = q ? `Найдено статей: ${visible}` : '';
});
