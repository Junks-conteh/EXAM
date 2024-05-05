document.addEventListener("DOMContentLoaded", function() {
  const bars = document.querySelector('bars');
  const menu = document.querySelector('menu');

  bars.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
});
