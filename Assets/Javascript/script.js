// menu
const headerLinks = document.querySelector('.header__links');
const menu = document.querySelector('.header__menu');

menu.addEventListener('click', ()=>{
    headerLinks.classList.toggle('active');
})

// slide
const courses = document.querySelectorAll('.slide');
const slide = document.querySelector('.courses__slide');

const buttonSlideLeft = document.querySelector('.main__courses div img:first-of-type');
const buttonSlideRight = document.querySelector('.main__courses div img:last-of-type');

const widthScreen = window.innerWidth;
const frame = document.querySelector('.main__courses div');
const widthFrame = parseFloat(getComputedStyle(frame).width);

// adicionando o width do tamanho do frame para cada slide
courses.forEach(course => {
    course.style.width = `${widthFrame}px`;
});

// posição inicial
let positionSlide = 1;

buttonSlideRight.addEventListener('click', function(){
    // aumenta 1 a cada clique 
    positionSlide++;

    // verifica se posição do slide é menor que a quantidade de cursos
    // caso a posição do slide for maior que o curso, irá para else if, resetando ao estilo normal
    if(positionSlide <= courses.length){
        slide.style.cssText = `transform: translateX(${-widthFrame * (positionSlide - 1)}px); transition: all 0.3s ease-in;`;

    } else if(positionSlide > courses.length){
        positionSlide = 1;
        slide.style.cssText = `transform: translateX(0);`;
    }
});

buttonSlideLeft.addEventListener('click', function(){
    // diminui 1 a cada clique
    positionSlide--;

    // verifica se a posição do slide é menor que a quantidade de cursos e se a posição do slide maior que 0
    // caso não ser e a posição for menor que 1 ele vai para o final
    if(positionSlide <= courses.length && positionSlide > 0){
        slide.style.cssText = `transform: translateX(${-widthFrame * (positionSlide - 1)}px); transition: all 0.3s ease-in;`;
    } else if(positionSlide < 1){
        slide.style.cssText = `transform: translateX(${-(widthFrame * (courses.length - 1))}px);`;

        positionSlide = courses.length;
    }
});