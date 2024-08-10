const sections = document.querySelectorAll('section');
const projectsProgramming = document.querySelectorAll('.programming');
const projectsDesign = document.querySelectorAll('.design');

// passa por todas as sections
for(let i = 0; i < sections.length; i++){

    sections.forEach((section, index) => {
        // o delay é dado pelo número da section vezes 0.2
        let delay = index * 0.2;
        let delaySection = parseFloat(getComputedStyle(section).animationDelay);
        // este caso somente vale até a section 3, pois os projetos da section 3 traz uma diferença no delay

        const programmingLast = document.querySelector('.programming:last-of-type');
        const delayProgramming = parseFloat(getComputedStyle(programmingLast).animationDelay);
        // seleciona o delay do ultimo item .programming

        const designLast = document.querySelector('.design:last-of-type');
        const delayDesign = parseFloat(getComputedStyle(designLast).animationDelay);
        // seleciona o delay do ultimo item .design

        section.style.animationDelay = `${delay}s`;

        // a diferença do delay para os projetos dentro da section é dado dentro deste if
        if(index === 3) {
            projectsProgramming.forEach(function(project, index){
                // o novo delay do projeto interno deve ser o delay da section, acrescentando 0.2, mais o index vezes 0.2
                delay = delaySection + (index * 0.2);
                project.style.animationDelay = `${delay}s`;
            });

        } else if(index === 4){
                delay = delayProgramming + 0.2;
                // o delay agora será do ultimo projeto de programação + 0.2

                section.style.animationDelay = `${delay}s`;
                projectsDesign.forEach(function(design, index){
                    delay = delaySection + (index * 0.2);
                    design.style.animationDelay = `${delay}s`
                });

        } else if(index === 5){
            // o delay agora será do ultimo projeto de design + 0.2
            delay = delayDesign + 0.2;
            
            section.style.animationDelay = `${delay}s`;

        } else if(index === 6){
            // delay para sexta seção, que será delay do ultimo design + 0.4
            delay = delayDesign + 0.4;
            section.style.animationDelay = `${delay}s`;
        }
    });
}