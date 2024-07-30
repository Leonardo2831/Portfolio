const headerLinks = document.querySelector('.header__links');
const menu = document.querySelector('.header__menu');

menu.addEventListener('click', ()=>{
    headerLinks.classList.toggle('active');
});