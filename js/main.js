import { account } from './data.js';
import { menesiai } from './data.js';


function table(months, acountData) {
    let HTML = '';
    for (let i = 0; i < acountData.length; i++) {
        const object = acountData[i];
        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${months[object.month-1]}</div>
                    <div class="cell">${object.income} Eur</div>
                    <div class="cell">${object.expense} Eur</div>
                    <div class="cell">${object.balance} Eur</div>
                </div>`;
        
    }
    const DOM = document.querySelector('.table-content')
    DOM.innerHTML = HTML;
     
}


table(menesiai, account);

