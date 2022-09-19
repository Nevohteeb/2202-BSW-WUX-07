const bell = document.querySelector('.fa-bell');
const heart = document.querySelector('.fa-heart');

function changeBellColourShake() {
    bell.classList.toggle('green');
    bell.classList.toggle('shake');
}

bell.addEventListener('click', changeBellColourShake);
