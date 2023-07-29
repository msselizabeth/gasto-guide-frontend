

const openMenuButton = document.querySelector('.js-open-btn');
const closeMenuButton = document.querySelector('.js-close-btn');
const menu = document.querySelector('.js-mobile-menu');
const links = document.querySelectorAll('.js-link');

openMenuButton.addEventListener('click', toggleModal);
closeMenuButton.addEventListener('click', toggleModal);

function toggleModal() {
    menu.classList.toggle('is-open');
}

for (const link of links) {
    link.addEventListener('click', toggleModal)
}