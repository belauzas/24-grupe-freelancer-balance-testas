function formatMoney(money){
    if (typeof money !== 'number'){
        return '-'
    }
 return money + ' Eur'
}
let sortedMonths = account.sort((a, b) =>  (b.month < a.month) ? 1 : (b.month > a.month) ? -1 : 0);

function renderTable(monthNames, balance){
    let HTML = ''
    for(let i=0; i<balance.length; i++) {
        const tableRow = balance[i]
        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${monthNames[tableRow.month -1]}</div>
                    <div class="cell">${formatMoney(tableRow.income)}</div>
                    <div class="cell">${formatMoney(tableRow.expense)}</div>
                    <div class="cell">${formatMoney(tableRow.balanse)}</div>
                </div>`
        const tableContentDOM = document.querySelector('.table-content')
        tableContentDOM.innerHTML = HTML
    }

}
renderTable(months, account)