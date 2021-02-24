import {account, months} from './data.js'

const table= document.querySelector('.table-content');
const totalIncome = document.getElementById('incomes')
const totalExpenses = document.getElementById('expenses')
const balance = document.getElementById('balance')



function validations(data){
    if (data === undefined){
        return 0;
    } else{
        return data;
    }
}


let display = account.map(function(item){   
    
    
    return `<div class="table-row">
                        <div class="cell">${item.month}</div>
                        <div class="cell">${months[item.month]}</div>
                        <div class="cell">${validations(item.income)}</div>
                        <div class="cell">${validations(item.expense)}</div>
                        <div class="cell">${validations(item.income) - validations(item.expense)}</div>
                    </div>`
                    
})

display = display.join('');
table.innerHTML = display



// calcs
let incomes = account.map(function(item){
   return validations(item.income)
}).reduce((a, b) => a + b, 0);

let expenses = account.map(function(item){
   return validations(item.expense)
}).reduce((a, b) => a + b, 0);


console.log(incomes);
console.log(expenses);

totalIncome.innerHTML = incomes
totalExpenses.innerHTML = expenses
balance.innerHTML = incomes - expenses





