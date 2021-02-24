import { account, months } from './data.js';


function renderTable(selector) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    let total = 0;

    for (let i = 0; i < months.length; i++) {
        const month = months[i];
        const money = account[i];

        if (!money.income) {
            money.income = 0;
        }
        if (!money.expense) {
            money.expense = 0;
        }

        total += money.income;
        total -= money.expense;


        HTML += `
    <div class="table-row">
        <div class="cell">${month.index}</div>
        <div class="cell">${month.monthName}</div>
        <div class="cell">${money.income}</div>
        <div class="cell">${money.expense}</div>
        <div class="cell">${total}</div>
    </div>`

    }
    DOM.innerHTML = HTML;
}

renderTable('.table-content');