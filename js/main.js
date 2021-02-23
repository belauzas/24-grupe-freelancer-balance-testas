import { account } from './data.js';
import { menesiai } from './data.js';

function zero(income) {
    if (income < 1 || income === undefined) {
        income = 0
        return 0;
    }
return income
}
function zeroExpense(expense) {
    if (expense < 1 || expense === undefined) {
        expense = 0;
        return expense;
    }
return expense
}
function balance(exp, inc) {
    if (typeof(exp) !== 'number'){
        return 0 - inc
    } else if (typeof(inc) !== 'number') {
        return exp
    }
    return parseInt(exp) - parseInt(inc)
}

function table(months, acountData) {
    let HTML = '';
    for (let i = 0; i < acountData.length; i++) {
        const object = acountData[i];
        
        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${months[object.month-1]}</div>
                    <div class="cell">${zero(object.income)} Eur</div>
                    <div class="cell">${zeroExpense(object.expense)} Eur</div>
                    <div class="cell">${balance(object.income, object.expense)} Eur</div>
                </div>`;
        
    }
    const DOM = document.querySelector('.table-content')
    DOM.innerHTML = HTML;
     
}



table(menesiai, account);

