const menu = document.querySelector('.js-menu');
const sidebar = document.querySelector('section');

function clickMenu() {
  sidebar.classList.toggle('active-sidebar');
}

menu.addEventListener('click', clickMenu);