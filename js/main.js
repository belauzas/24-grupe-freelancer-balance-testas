function makeNumber(money) {
    if(typeof money !== 'number') {
        return '-';
    }
    return money + ' Eur';
}

function incomeTable(monthNames, moneyIncome) {
    let HTML = '';
    let balance = 0;
    for(let i = 0; i<moneyIncome.length; i++) {
        const number = moneyIncome[i];
        balance += number.income ? number.income : 0;
        balance -= number.expense ? number.expense : 0;

        HTML += `<div class="table-row">
        <div class="cell">${i+1}</div>
        <div class="cell">${monthNames[number.month - 1]}</div>
        <div class="cell">${makeNumber(number.income)}</div>
        <div class="cell">${makeNumber(number.expense)}</div>
        <div class="cell">${makeNumber(balance)}</div>
        </div>`;
    }

    const tableContentDOM = document.querySelector('.table-content');
    tableContentDOM.innerHTML = HTML;
}

incomeTable(months, account);