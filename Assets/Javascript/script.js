// menu
const headerLinks = document.querySelector('.header__links');
const menu = document.querySelector('.header__menu');

menu.addEventListener('click', ()=>{
    headerLinks.classList.toggle('active');
});

// atualização gráfico
const graphics1 = document.querySelector('.skills__graphics div:nth-of-type(1) > p');
const graphics2 = document.querySelector('.skills__graphics div:nth-of-type(2) > p');
const graphics3 = document.querySelector('.skills__graphics div:nth-of-type(3) > p');
const graphics4 = document.querySelector('.skills__graphics div:nth-of-type(4) > p');
const graphics5 = document.querySelector('.skills__graphics div:nth-of-type(5) > p');

const fixedMonth = 7;
// julho

// window.onload = function(){
//     checkMonth();
// }; 

function checkMonth(){
    const nowDate = new Date();
    const nowMonth = (nowDate.getMonth() + 6);
    // dezembro = 12

    if(Math.abs(fixedMonth - nowMonth) === 1){
        graphics1.innerHTML = `${Number(graphics1.innerHTML) + 1} mês`;

    } else if(Number(graphics1.innerHTML) + Math.abs(fixedMonth - nowMonth) < 12) {
        graphics1.innerHTML = `${Number(graphics1.innerHTML) + Math.abs(fixedMonth - nowMonth)} meses`;

    } else if(Number(graphics1.innerHTML) + Math.abs(fixedMonth - nowMonth) === 12){
        graphics1.innerHTML = `1 ano`;
        
    } else {
        graphics1.innerHTML = `${} ano e ${Number(graphics1.innerHTML) + Math.abs(fixedMonth - nowMonth)} meses`;
    }

};

checkMonth();

    // if(Math.abs(fixedYear - nowYear) === 1 && ){

    //     if(Math.abs(fixedMonth - nowMonth) === 0){
    //         graphics1.innerHTML = '1 ano'; 
    //     } else if(Math.abs(fixedMonth - nowMonth) === 1){
    //         graphics1.innerHTML = `1 ano e 1 mês`;
    //     } else {
    //         graphics1.innerHTML = `1 ano e ${Math.abs(fixedMonth - nowMonth)} meses`;
    //     }
        
    // } else {

    //     if(Math.abs(fixedMonth - nowMonth) === 0){
    //         graphics1.innerHTML = `${Math.abs(fixedYear - nowYear)} ano`;
            
    //     } else if(Math.abs(fixedMonth - nowMonth) === 1){
    //         graphics1.innerHTML = `${Math.abs(fixedYear - nowYear)} ano e 1 mês`;

    //     } else {
    //         graphics1.innerHTML = `${Math.abs(fixedYear - nowYear)} ano e ${Math.abs(fixedMonth - nowMonth)} meses`;

    //     }

    // }