// menu
const headerLinks = document.querySelector('.header__links');
const menu = document.querySelector('.header__menu');

menu.addEventListener('click', ()=>{
    headerLinks.classList.toggle('active');
});

// atualização gráfico
const graphicsBackground1 = document.querySelector('.skills__graphics div:nth-of-type(1) .graphics div');
const graphicsBackground2 = document.querySelector('.skills__graphics div:nth-of-type(2) .graphics div');
const graphicsBackground4 = document.querySelector('.skills__graphics div:nth-of-type(4) .graphics div');
const graphicsBackground5 = document.querySelector('.skills__graphics div:nth-of-type(5) .graphics div');

const graphics1 = document.querySelector('.skills__graphics div:nth-of-type(1) p');
const graphics2 = document.querySelector('.skills__graphics div:nth-of-type(2) p');
const graphics3 = document.querySelector('.skills__graphics div:nth-of-type(3) p');
const graphics4 = document.querySelector('.skills__graphics div:nth-of-type(4) p');
const graphics5 = document.querySelector('.skills__graphics div:nth-of-type(5) p');

const nameMes1 = document.querySelector('.skills__graphics div:nth-of-type(1) span:first-of-type');
const nameMes2 = document.querySelector('.skills__graphics div:nth-of-type(2) span:first-of-type');
const nameMes3 = document.querySelector('.skills__graphics div:nth-of-type(3) span:first-of-type');
const nameMes4 = document.querySelector('.skills__graphics div:nth-of-type(4) span:first-of-type');
const nameMes5 = document.querySelector('.skills__graphics div:nth-of-type(5) span:first-of-type');

const nameMeses1 = document.querySelector('.skills__graphics div:nth-of-type(1) span:last-of-type');
const nameMeses2 = document.querySelector('.skills__graphics div:nth-of-type(2) span:last-of-type');
const nameMeses3 = document.querySelector('.skills__graphics div:nth-of-type(3) span:last-of-type');
const nameMeses4 = document.querySelector('.skills__graphics div:nth-of-type(4) span:last-of-type');
const nameMeses5 = document.querySelector('.skills__graphics div:nth-of-type(5) span:last-of-type');

let fixedMonth = 8;
const fixedYear = 2024;
// julho 

function checkMonth(){
    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    // 2025
    const nowMonth = nowDate.getMonth() + 1;
    // 1
    const nowDay = nowDate.getDate() + 27;
    const variationMonths = Math.abs(nowMonth - fixedMonth);
    const variationYears = Math.abs(nowYear - fixedYear);

    // loop para somar mais 1 ao meses a cada mes que passar
    if(nowDay === 30){

        // para os 4 meses depois de agosto
        if(nowYear === 2024){
            for(let i = 0; i < 1; i++){
                graphics1.innerHTML = `${variationMonths + Number(graphics1.innerHTML)}`;
                graphics2.innerHTML = `${variationMonths + Number(graphics2.innerHTML)}`;
                graphics3.innerHTML = `${variationMonths + Number(graphics3.innerHTML)}`;
                graphics4.innerHTML = `${variationMonths + Number(graphics4.innerHTML)}`;
                graphics5.innerHTML = `${variationMonths + Number(graphics5.innerHTML)}`;
            };
        }

        // para os próximos anos
        if(nowYear > 2024){
            for(let i = 0; i < 1; i++){
                // o calculo para os meses foram pego o valor do final do ano passado (2024), adicionado mês atual, e somado a variação e anos - 1 vezes 12 para dar o valor dos meses para infinitos anos.
                graphics1.innerHTML = `${11 + nowMonth + (12 * (variationYears - 1))}`;
                graphics2.innerHTML = `${15 + nowMonth + (12 * (variationYears - 1))}`;
                graphics3.innerHTML = `${16 + nowMonth + (12 * (variationYears - 1))}`;
                graphics4.innerHTML = `${5 + nowMonth + (12 * (variationYears - 1))}`;
                graphics5.innerHTML = `${7 + nowMonth + (12 * (variationYears - 1))}`;
            };
        }
    }

    if(graphics1.innerHTML == 1){
        nameMes1.style = 'display: block;';
        nameMeses1.style = 'display: none;';
    } else {
        nameMes1.style = 'display: none;';
        nameMeses1.style = 'display: block;';
    }

    if(graphics2.innerHTML == 1){
        nameMes2.style = 'display: block;';
        nameMeses2.style = 'display: none;';
    } else {
        nameMes2.style = 'display: none;';
        nameMeses2.style = 'display: block;';
    }

    if(graphics3.innerHTML == 1){
        nameMes3.style = 'display: block;';
        nameMeses3.style = 'display: none;';
    } else {
        nameMes3.style = 'display: none;';
        nameMeses3.style = 'display: block;';
    }

    if(graphics4.innerHTML == 1){
        nameMes4.style = 'display: block;';
        nameMeses4.style = 'display: none;';
    } else {
        nameMes4.style = 'display: none;';
        nameMeses4.style = 'display: block;';
    }
    
    if(graphics5.innerHTML == 1){
        nameMes5.style = 'display: block;';
        nameMeses5.style = 'display: none;';
    } else {
        nameMes5.style = 'display: none;';
        nameMeses5.style = 'display: block;';
    }
};

checkMonth();

// mudando width das div diante 
const graphics1Width = (Number(graphics1.innerHTML) / Number(graphics3.innerHTML)) * 100;
const graphics2Width = (Number(graphics2.innerHTML) / Number(graphics3.innerHTML)) * 100;
const graphics4Width = (Number(graphics4.innerHTML) / Number(graphics3.innerHTML)) * 100;
const graphics5Width = (Number(graphics5.innerHTML) / Number(graphics3.innerHTML)) * 100;

graphicsBackground1.style = `width: ${graphics1Width}%;`;
graphicsBackground2.style = `width: ${graphics2Width}%;`;
graphicsBackground4.style = `width: ${graphics4Width}%;`;
graphicsBackground5.style = `width: ${graphics5Width}%;`;