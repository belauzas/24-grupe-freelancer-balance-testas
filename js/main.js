function formatMoney(money){
    if (typeof money !== 'number'){
        return '-'
    }
 return money + ' Eur'
}
let sortedMonths = account.sort((a, b) =>   a.month - b.month)//(b.month < a.month) ? 1 : (b.month > a.month) ? -1 : 0);


function renderTable(monthNames, balance){
    let HTML = ''
    let balansas = 0
    let totalIncome = 0
    let totalExpense = 0
    for(let i=0; i<balance.length; i++) {
        const tableRow = balance[i]
        balansas += tableRow.income ? tableRow.income : 0
        balansas -= tableRow.expense ? tableRow.expense : 0
        totalIncome += tableRow.income ? tableRow.income : 0
        totalExpense += tableRow.expense ? tableRow.expense : 0
        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${monthNames[tableRow.month -1]}</div>
                    <div class="cell">${formatMoney(tableRow.income)}</div>
                    <div class="cell">${formatMoney(tableRow.expense)}</div>
                    <div class="cell">${formatMoney(balansas)}</div>
                </div>`
        const tableContentDOM = document.querySelector('.table-content')
        tableContentDOM.innerHTML = HTML
        const footerIncomeDOM = document.querySelector('.table-footer > .cell:nth-of-type(3)')
        const footerExpenseDOM = document.querySelector('.table-footer > .cell:nth-of-type(4)')
        const footerBalansasDOM = document.querySelector('.table-footer > .cell:nth-of-type(5)')

        footerIncomeDOM.innerText = formatMoney(totalIncome)
        footerExpenseDOM.innerText = formatMoney( totalExpense)
        footerBalansasDOM .innerText = formatMoney(balansas)

    }

}
renderTable(months, account)