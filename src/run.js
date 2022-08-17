const animal = document.querySelector('.animal');
const bush = document.querySelector('.bush');

//jumping function

const jump = () => {
    animal.classList.add('jump');
    setTimeout(() => {
        animal.classList.remove('jump');
    }, 500); 
}


document.addEventListener('keydown', jump);

const loop = setInterval(() => {

    const bushPosition = bush.offsetLeft;
    const animalPosition = +window.getComputedStyle(animal).bottom.replace('px', '');

    if (bushPosition <= 175 && bushPosition >= 0 && animalPosition < 45) {
        bush.style.animation = 'none';
        bush.style.left = `${bushPosition}px`;

        animal.style.animation = 'none';
        animal.style.bottom = `${animalPosition}px`;

        animal.src = './src/images/game-over.png';
        animal.style.width = '400px';
        animal.style.marginLeft = '33%';

        clearInterval(loop);
    }

}, 10);