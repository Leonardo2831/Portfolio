dayjs.locale('pt-br');

const graphicsTexts = document.querySelectorAll('.js-graphicsText');

const toDay = dayjs();

// tecnologias com suas datas seguindo esse padrão para não haver conflito e resultar em NaN
const initialDate = [
    // tailwind
    dayjs('2025-02-06', 'YYYY-MM-DD'),
    // sass
    dayjs('2024-08-14', 'YYYY-MM-DD'),
    // css
    dayjs('2024-05-20', 'YYYY-MM-DD'),
    // javascript
    dayjs('2024-11-13', 'YYYY-MM-DD'),
    // html
    dayjs('2024-03-28', 'YYYY-MM-DD'),
    // figma
    dayjs('2024-11-07', 'YYYY-MM-DD'),
];

// funções para o texto em plural
const pluralYear = (years) => {
    if(years == 1) return `${years} ano`;
    return `${years} anos`;
}

const pluralMonth = (months) => {
    if(months == 1) return `${months} mês`;
    return `${months} meses`;
}

graphicsTexts.forEach((graphicText ,index) => {

    const dateGraphicText = initialDate[index];
    
    if(dateGraphicText){
        const diffDateYear = toDay.diff(dateGraphicText, 'year');        
        // divide por 12 e pega o resto, sendo eles os meses
        const diffDateMonth = toDay.diff(dateGraphicText, 'month') % 12;

        if(diffDateYear >= 0 && diffDateMonth >= 0){
            if(diffDateYear == 0){

                graphicText.textContent = pluralMonth(diffDateMonth);
    
            } else {
    
                graphicText.textContent = 
                diffDateMonth > 0 ? `${pluralYear(diffDateYear) } e ${pluralMonth(diffDateMonth)}` : pluralYear(diffDateYear);
    
            }
        }
        
    }
});

let diffDateOlder = toDay.diff(initialDate[4], 'month');

// tamanho do gráfico
graphicsTexts.forEach((graphicText, index) => {

    // as contas irão ser feitas com base no gráfico de maior tempo de estudo, neste caso o html
    const dateGraphicText = initialDate[index];
    let diffDateMonth = toDay.diff(dateGraphicText, 'month');

    const widthGraphicText = Number((diffDateMonth / diffDateOlder) * 100);

    graphicText.parentElement.style.width = `${widthGraphicText}%`;
});