import{account} from './data.js';

const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];

const months = account.map((month) => month.month);

let HTML = ''
const DOM = document.querySelector('.table-content');

 for(const item of account) {
     let balance = 0;
        if (!item.expense){
            balance = item.income;
            item.expense = 0
        }

        if (!item.income){
            balance = -item.expense
            item.income = 0
        }

    let month = '';

    switch(item.month) {
        case 1:
        month = menesiai[0];
        break;
        case 2:
        month = menesiai[1];
        break;
        case 3:
        month = menesiai[2]
        break;
        case 4:
        month = menesiai[3];
        break;
        case 5:
        month = menesiai[4];
        break;
        case 6:
        month = menesiai[5];
        break;
        case 7:
        month = menesiai[6];
        break;
        case 8:
        month = menesiai[7];
        break;
        case 9:
        month = menesiai[8];
        break;
        case 10:
        month = menesiai[9];
        break;
        case 11:
        month = menesiai[10];
        break;
        case 12:
        month = menesiai[11];
    }

     HTML += `<div class="table-row">
     <div class="cell">${account.indexOf(item)}</div>
     <div class="cell">${month}</div>
     <div class="cell">${item.income} Eur</div>
     <div class="cell">${item.expense} Eur</div>
     <div class="cell">${balance} Eur</div>
 </div>`
 }

 DOM.innerHTML = HTML;


