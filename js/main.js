function formatMoney(money){
    if (typeof money !== 'number'){
        return '-'
    }
 return money + ' Eur'
}

let sortedMonths = account.sort((a, b) =>   a.month - b.month)

function renderTable(monthNames, balance){
    let HTML = ''
    let balansas = 0
    let totalIncome = 0
    let totalExpense = 0


    let incomeArray = balance.map(function(tableRow){
        return tableRow.income
      })
      incomeArray = incomeArray.filter(function(element) {
        return element !== undefined;
    });
    let incomeArrayNew = incomeArray.sort((a, b) => a - b)

    minIncome = incomeArrayNew[0]
    maxIncome = incomeArrayNew[incomeArrayNew.length-1]
    
    const minIncomeMonth = balance.find(({income}) => income === minIncome)
    const minIncomeMonthName = monthNames[minIncomeMonth.month-1]
    
    const maxIncomeMonth = balance.find(({income}) => income === maxIncome)
    const maxIncomeMonthName = monthNames[maxIncomeMonth.month-1]

    //////////////

    let expenseArray = balance.map(function(tableRow){
        return tableRow.expense
      })
      expenseArray = expenseArray.filter(function(element) {
        return element !== undefined;
    });
    let expenseArrayNew = expenseArray.sort((a, b) => a - b)
    
    minExpense = expenseArrayNew[0]
    maxExpense = expenseArrayNew[expenseArrayNew.length-1]
    
    const minExpenseMonth = balance.find(({expense}) => expense === minExpense)
    const minExpenseMonthName = monthNames[minExpenseMonth.month-1]
    
    const maxExpenseMonth = balance.find(({expense}) => expense === maxExpense)
    const maxExpenseMonthName = monthNames[maxExpenseMonth.month-1]


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

        const minIncomeDOM = document.querySelector('#minIncome')
        const maxIncomeDOM = document.querySelector('#maxIncome')
        const minExpenseDOM = document.querySelector('#minExpense')
        const maxExpenseDOM = document.querySelector('#maxExpense')

        minIncomeDOM.innerText = minIncomeMonthName
        maxIncomeDOM.innerText = maxIncomeMonthName
        minExpenseDOM.innerText = minExpenseMonthName
        maxExpenseDOM.innerText = maxExpenseMonthName
    }
}
renderTable(months, account)