import { account, months } from './data.js';


function renderTable() {
    const tableDOM = document.querySelector('.table-content');
    const footerDOM = document.querySelector('.table-footer');
    let HTML = '';
    let totalIncome = 0;
    let totalExpense = 0;
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
        totalIncome += money.income;
        totalExpense += money.expense;
        if (!money.income) {
            money.income = '-';
        }
        if (!money.expense) {
            money.expense = '-';
        }
        HTML += `
            <div class="table-row">
                <div class="cell">${month.index}</div>
                <div class="cell">${month.monthName}</div>
                <div class="cell">${money.income}</div>
                <div class="cell">${money.expense}</div>
                <div class="cell">${total}</div>
            </div>`
    }
    tableDOM.innerHTML = HTML;

    HTML = `
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell">${totalIncome} Eur</div>
                <div class="cell">${totalExpense} Eur</div>
                <div class="cell total">${total} Eur</div>
            `
    footerDOM.innerHTML = HTML;
}

renderTable();



