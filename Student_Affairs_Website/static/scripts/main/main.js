const textAnn = document.getElementById('text');
let color = getComputedStyle(document.documentElement).getPropertyValue('--pop');
let icon = document.querySelector('.icon');
const btnOkay = document.querySelector('.okay');
btnOkay.addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('active');
});
