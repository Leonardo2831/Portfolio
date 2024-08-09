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

let positionSlide = 1;

buttonSlideRight.addEventListener('click', function(){
    positionSlide++;

    if(positionSlide <= courses.length){
        if(widthScreen < 768){
            slide.style.cssText = `transform: translateX(${-340 * (positionSlide - 1)}px)`;
        } else if(widthScreen >= 768 && widthScreen < 1024){
            slide.style.cssText = `transform: translateX(${-600 * (positionSlide - 1)}px)`;
        } else if(widthScreen >= 1024){
            slide.style.cssText = `transform: translateX(${-900 * (positionSlide - 1)}px)`;
        }
    } else if(positionSlide > courses.length){
        positionSlide = 1;
        slide.style.cssText = `transform: translateX(0);`;
    }
});

buttonSlideLeft.addEventListener('click', function(){
    positionSlide--;

    if(positionSlide <= courses.length && positionSlide > 0){
        if(widthScreen < 768){
            slide.style.cssText = `transform: translateX(${-340 * positionSlide}px);`;
        } else if(widthScreen >= 768 && widthScreen < 1024){
            slide.style.cssText = `transform: translateX(${-600 * positionSlide}px);`;
        } else if(widthScreen >= 1024){
            slide.style.cssText = `transform: translateX(${-900 * (positionSlide - 1)}px);`;
        }
    } else if(positionSlide == 0){
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