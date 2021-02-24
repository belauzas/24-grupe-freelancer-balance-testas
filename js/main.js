import {account, months} from './data.js'

const table= document.querySelector('.table-content');



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






