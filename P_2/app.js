const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
            circle.style.transform = 'scale(1.1)';
            circle.style.opacity = '1';
        } else {
            circle.classList.remove('active');
            circle.style.transform = 'scale(1)';
            circle.style.opacity = '0.7';
        }
    });

    progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + '%';

    // Dynamic background color
    document.body.style.backgroundColor = getRandom();

    // Fix: Adjusting button states correctly
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}

function getRandom() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
