

const openMenuButton = document.querySelector('.js-open-btn');
const closeMenuButton = document.querySelector('.js-close-btn');
const menu = document.querySelector('.js-mobile-menu');

openMenuButton.addEventListener('click', toggleModal);
closeMenuButton.addEventListener('click', toggleModal);

function toggleModal() {
    menu.classList.toggle('is-open');
}