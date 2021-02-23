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

console.log(sortedMonths[1].hasOwnProperty('income'));


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

console.log(income, expenses, balance);

const sortedIncome = sortedMonths.sort((a,b))

console.log(sortedMonths);