const menu = document.querySelector('.js-mobile-menu');
const openMenuButton = document.querySelector('.js-open-btn');
const closeMenuButton = document.querySelector('.js-close-btn');

function toggleModal() {
    menu.classList.toggle('is-open');
}

openMenuButton.addEventListener('click', toggleModal);
closeMenuButton.addEventListener('click', toggleModal);

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-link')) {
        toggleModal();
    }
    if (!menu.contains(event.target) && !openMenuButton.contains(event.target)) {
        menu.classList.remove('is-open');
    }
});
