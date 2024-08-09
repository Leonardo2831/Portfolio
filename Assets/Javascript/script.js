// menu
const headerLinks = document.querySelector('.header__links');
const menu = document.querySelector('.header__menu');

menu.addEventListener('click', ()=>{
    headerLinks.classList.toggle('active');
})

const courses = document.querySelectorAll('.slide');
const slide = document.querySelector('.courses__slide');

const buttonSlideLeft = document.querySelector('.main__courses div img:first-of-type');
const buttonSlideRight = document.querySelector('.main__courses div img:last-of-type');

const widthScreen = window.innerWidth;

// posição inicial
let positionSlide = 1;

buttonSlideRight.addEventListener('click', function(){
    // aumenta 1 a cada clique 
    positionSlide++;

    // verifica se posição do slide é menor que a quantidade de cursos
    if(positionSlide <= courses.length){
        // cada else é um tamanho de tela
        if(widthScreen < 768){
            slide.style.cssText = `transform: translateX(${-340 * (positionSlide - 1)}px)`;
            // como a posição inicial é uma, para contas foi necessário tirar 1 da posição
        } else if(widthScreen >= 768 && widthScreen < 1024){
            slide.style.cssText = `transform: translateX(${-600 * (positionSlide - 1)}px)`;
        } else if(widthScreen >= 1024){
            slide.style.cssText = `transform: translateX(${-900 * (positionSlide - 1)}px)`;
        }
        // caso a posição do slide for maior que o curso, irá resetar, voltar do início
    } else if(positionSlide > courses.length){
        positionSlide = 1;
        slide.style.cssText = `transform: translateX(0);`;
    }
});

buttonSlideLeft.addEventListener('click', function(){
    positionSlide--;
    // valor negativo para retroceder 1

    if(positionSlide <= courses.length && positionSlide > 0){
        if(widthScreen < 768){
            slide.style.cssText = `transform: translateX(${-340 * (positionSlide - 1)}px);`;
        } else if(widthScreen >= 768 && widthScreen < 1024){
            slide.style.cssText = `transform: translateX(${-600 * (positionSlide - 1)}px);`;
        } else if(widthScreen >= 1024){
            slide.style.cssText = `transform: translateX(${-900 * (positionSlide - 1)}px);`;
        }
    } else if(positionSlide < 1){
        // caso a posição for menor que 1 ele vai para o final 
        if(widthScreen < 768){
            slide.style.cssText = `transform: translateX(${-340 * (courses.length - 1)}px);`;
        } else if(widthScreen >= 768 && widthScreen < 1024){
            slide.style.cssText = `transform: translateX(${-600 * (courses.length - 1)}px);`;
        } else if(widthScreen >= 1024){
            slide.style.cssText = `transform: translateX(${-900 * (courses.length - 1)}px);`;
        }

        positionSlide = 3;
    }
});