const rateSelect = document.querySelector('.rate-select')
const thankYou = document.querySelector('.thank-you')
const circles = document.querySelectorAll('.circle')
const choice = document.getElementById('choice')

let selectedValue = null;

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        circles.forEach(c => c.classList.remove('selected')); 
        circle.classList.add('selected'); 
        selectedValue = circle.getAttribute('data-value'); 
    });
});

document.getElementById('submit').addEventListener('click', () => {
    if (selectedValue) {
        rateSelect.classList.remove('active')
        thankYou.classList.add('active')
        choice.innerText = `${selectedValue}`
    } else {
        alert('Por favor, selecione um número.');
    }
});