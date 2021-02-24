import { account, months } from './data.js';

// DOMS
const tableDOM = document.querySelector('.table-content');
const footerDOM = document.querySelector('.table-footer');
const minIncomeDOM = document.querySelector('#minIncome');
const maxIncomeDOM = document.querySelector('#maxIncome');
const minExpenseDOM = document.querySelector('#minExpense');
const maxExpenseDOM = document.querySelector('#maxExpense');

// VARIABLES
let HTML = '',
    totalIncome = 0,
    totalExpense = 0,
    total = 0,
    minIncome = Infinity,
    minIncomeI = 0,
    maxIncome = -Infinity,
    maxIncomeI = 0,
    minExpense = Infinity,
    minExpenseI = 0,
    maxExpense = -Infinity,
    maxExpenseI = 0;

// LOOP BROTHER
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

    // RENDER TABLE
    HTML += `
            <div class="table-row">
                <div class="cell">${month.index}</div>
                <div class="cell">${month.monthName}</div>
                <div class="cell">${money.income}.00 Eur</div>
                <div class="cell">${money.expense}.00 Eur</div>
                <div class="cell">${total}.00 Eur</div>
            </div>`

    // LOGIC FOR METU SUVESTINE
    if (money.income && money.income < minIncome) {
        minIncome = money.income;
        minIncomeI = i;
    }
    if (money.income && money.income > maxIncome) {
        maxIncome = money.income;
        maxIncomeI = i;
    }
    if (money.expense && money.expense < minExpense) {
        minExpense = money.expense;
        minExpenseI = i;
    }
    if (money.expense && money.expense > maxExpense) {
        maxExpense = money.expense;
        maxExpenseI = i;
    }

}
tableDOM.innerHTML = HTML;

// FOOTER TABLE
HTML = `
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${totalIncome}.00 Eur</div>
        <div class="cell">${totalExpense}.00 Eur</div>
        <div class="cell total">${total}.00 Eur</div>
       `
footerDOM.innerHTML = HTML;

// INPUT FOR METU SUVESTINE
minIncomeDOM.innerText = months[minIncomeI].monthName;
maxIncomeDOM.innerText = months[maxIncomeI].monthName;
minExpenseDOM.innerText = months[minExpenseI].monthName;
maxExpenseDOM.innerText = months[maxExpenseI].monthName;