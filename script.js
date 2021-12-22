'use strict';

let showModal = document.querySelectorAll('.show-modal');
const modalEl = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const openModal = function () {
    modalEl.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < showModal.length; i++) {
    //   console.log(showModal[i]);
    showModal[i].addEventListener('click', openModal);
}

const hideModal = function () {
    modalEl.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
        hideModal();
    }
});