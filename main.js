const lottoNumbers = document.querySelectorAll('.lotto-number');
const generateBtn = document.getElementById('generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

let isLight = false;

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        isLight = true;
    }
});

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    lottoNumbers.forEach((element, index) => {
        element.textContent = sortedNumbers[index];
    });
});

themeToggleBtn.addEventListener('click', () => {
    isLight = !isLight;
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});