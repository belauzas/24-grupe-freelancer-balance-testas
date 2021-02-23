import {account} from './data.js';

const sortedMonths = account.sort((a, b) => (a.month > b.month) ? 1 : -1);
const menesiai = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"];



for (let i = 0; i < sortedMonths.length; i++) {
    sortedMonths[i].month = menesiai[i];
}

let HTML = '';
let income = 0;
let expenses = 0;
let balance = 0;
const DOM = document.querySelector('.table-content');


for (let i = 0; i < sortedMonths.length; i++) {
    if (sortedMonths[i].hasOwnProperty('expense') && sortedMonths[i].hasOwnProperty('income')) {

    HTML += `<div class="table-row">
    <div class="cell">${i+1}</div>
    <div class="cell">${sortedMonths[i].month}</div>
    <div class="cell">${sortedMonths[i].income}</div>
    <div class="cell">${sortedMonths[i].expense}</div>
    <div class="cell">${sortedMonths[i].income - sortedMonths[i].expense}</div>
</div>`

    income += sortedMonths[i].income;
    expenses += sortedMonths[i].expense;
    balance += sortedMonths[i].income - sortedMonths[i].expense;

}

    else if (!sortedMonths[i].hasOwnProperty('income') && sortedMonths[i].hasOwnProperty('expense')) {

        HTML += `<div class="table-row">
        <div class="cell">${i+1}</div>
        <div class="cell">${sortedMonths[i].month}</div>
        <div class="cell"> - </div>
        <div class="cell">${sortedMonths[i].expense} </div>
        <div class="cell">${-sortedMonths[i].expense}</div>
    </div>`

    expenses += sortedMonths[i].expense;
    balance += -sortedMonths[i].expense;

}

    else if (sortedMonths[i].hasOwnProperty('income') && !sortedMonths[i].hasOwnProperty('expense')) {

        HTML += `<div class="table-row">
        <div class="cell">${i+1}</div>
        <div class="cell">${sortedMonths[i].month}</div>
        <div class="cell">${sortedMonths[i].income}</div>
        <div class="cell"> - </div>
        <div class="cell">${sortedMonths[i].income}</div>
    </div>`

        income += sortedMonths[i].income;
        balance += sortedMonths[i].income;

}


    else if (!sortedMonths[i].hasOwnProperty('income') && !sortedMonths[i].hasOwnProperty('expense')) {

        HTML += `<div class="table-row">
        <div class="cell">${i+1}</div>
        <div class="cell">${sortedMonths[i].month}</div>
        <div class="cell"> - </div>
        <div class="cell"> - </div>
        <div class="cell">0</div>
    </div>`}

    

    }

DOM.innerHTML = HTML;

const DOMincome = document.querySelector('.table-footer > .cell:nth-of-type(3)');
DOMincome.innerText = `${income}.00`;

const DOMexpenses = document.querySelector('.table-footer > .cell:nth-of-type(4)');
DOMexpenses.innerText = `${expenses}.00`;

const DOMbalance = document.querySelector('.table-footer > .cell:nth-of-type(5)');
DOMbalance.innerText = `${balance}.00`;

let highestPaidMonth = {month: "", income: 0};

sortedMonths.forEach(el => {
    const { month, income, expense } = el;
    if(income > highestPaidMonth.income){
       highestPaidMonth.month = month;
        highestPaidMonth.income = income;}
    });

const DOMHighestPaid = document.getElementById('maxIncome');
DOMHighestPaid.innerText = highestPaidMonth.month; 
      
let lowestPaidMonth = {month: "", income: Infinity};

sortedMonths.forEach(el => {
    const { month, income, expense } = el;
    if(income < lowestPaidMonth.income){
       lowestPaidMonth.month = month;
       lowestPaidMonth.income = income;}
    });

console.log(lowestPaidMonth);

const DOMLowestPaid = document.getElementById('minIncome');
DOMLowestPaid.innerText = lowestPaidMonth.month;

let highestExpenses = {month: "", expense: 0};

sortedMonths.forEach(el => {
    const { month, income, expense } = el;
    if(expense > highestExpenses.expense){
       highestExpenses.month = month;
        highestExpenses.expense = expense;}
    });

console.log(highestExpenses)

const DOMHighestExpenses = document.getElementById('maxExpense');
DOMHighestExpenses.innerText = highestExpenses.month;

let lowestExpenses = {month: "", expense: Infinity};

sortedMonths.forEach(el => {
    const { month, income, expense } = el;
    if(expense < lowestExpenses.expense){
       lowestExpenses.month = month;
        lowestExpenses.expense = expense;}
    });

const DOMLowestExpenses = document.getElementById('minExpense');
DOMLowestExpenses.innerText = lowestExpenses.month;

const DOMTitle = document.querySelector('.container > .row > h1');
DOMTitle.innerText = "Karolio metai";


// for (let i=0; i < sortedMonths.length; i++) {
//     if (sortedMonths[i].income) {
//         if (sortedMonths[i].income > sortedMonths[i+1].income) {
//             highestPaidMonth = sortedMonths[i].month;
//         } else {
//             highestPaidMonth = sortedMonths[i+1].month;
//         }
//     }
// }
