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
