// menu
const headerLinks = document.querySelector('.header__links');
const menu = document.querySelector('.header__menu');

menu.addEventListener('click', ()=>{
    headerLinks.classList.toggle('active');
});

// atualização gráfico
const graphics1 = document.querySelector('.skills__graphics div:nth-of-type(1)');
const graphics2 = document.querySelector('.skills__graphics div:nth-of-type(2)');
const graphics3 = document.querySelector('.skills__graphics div:nth-of-type(3)');
const graphics4 = document.querySelector('.skills__graphics div:nth-of-type(4)');
const graphics5 = document.querySelector('.skills__graphics div:nth-of-type(5)');

