function openMenu(){
    const headerLinks = document.querySelector('.js-menuLinks');
    const menuMobile = document.querySelector('.js-menu');
    
    if(headerLinks && menuMobile){
        const nameClass= 'activeMenu';
        function openMenuMobile(){
            headerLinks.classList.toggle(nameClass);
        }
        
        menuMobile.addEventListener('click', openMenuMobile);
    }

}
openMenu();

function showSectionAnimation(){
    const sections = document.querySelectorAll('.js-showSection');
    const windowHalf = window.innerHeight * 0.6;
    const nameClass = 'activeSection';

    if(sections.length){
        sections[0].classList.add(nameClass);

        function showSection(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top - windowHalf;
        
                if(sectionTop < 0){
                    
                    section.classList.add(nameClass);
                }
        
            });
        }
        
        window.addEventListener('scroll', showSection);
    }
}
showSectionAnimation();

function slide(){
    const courses = document.querySelectorAll('.js-slide');
    const slide = document.querySelector('.js-courses');
    
    const buttonSlideLeft = document.querySelector('.js-coursesMain div img:first-of-type');
    const buttonSlideRight = document.querySelector('.js-coursesMain div img:last-of-type');
    
    const widthScreen = window.innerWidth;
    const frame = document.querySelector('.js-coursesMain div');
    const widthFrame = parseFloat(getComputedStyle(frame).width);

    if(courses && slide && buttonSlideLeft && buttonSlideRight && frame){
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
    }
}
slide();

function scrollBehaviorSmooth(){
    const headerLinks = document.querySelectorAll('.js-scrollSmooth a[href^="#"]');

    if(headerLinks){
        function scrollSmooth(event){
            event.preventDefault();
            const hrefLinks = this.getAttribute('href');
            const sectionLink = document.querySelector(hrefLinks);
    
            sectionLink.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        headerLinks.forEach((linkHeader)=>{
            linkHeader.addEventListener('click', scrollSmooth);
        });
    }
}
scrollBehaviorSmooth();
