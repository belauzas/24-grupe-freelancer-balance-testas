function formatMoney(money) {
    if (typeof money !== 'number') {
        return '-';
    }
    return money + ' Eur';
}

function sortData(list) {
    let sortedList = [];

    for (let i = 1; i <= 12; i++) {
        for (let k = 0; k < list.length; k++) {
            if (list[k].month === i) {
                sortedList.push(list[k]);
                break;
            }
        }
    }

    return sortedList;
}

function renderTable (monthNames, cashFlow) {
    let HTML = '',
        balance = 0,
        income = 0,
        expense = 0,
        minIncomeMonthIndex = 0,
        minIncomeMonthValue = Infinity,
        maxIncomeMonthIndex = 0,
        maxIncomeMonthValue = -Infinity,
        minExpenseMonthIndex = 0,
        minExpenseMonthValue = Infinity,
        maxExpenseMonthIndex = 0,
        maxExpenseMonthValue = -Infinity;

    cashFlow = sortData(cashFlow);

    for (let i = 0; i < cashFlow.length; i++) {
        const item = cashFlow[i];

        income += item.income ? item.income : 0;
        expense += item.expense ? item.expense : 0;
        balance = income - expense;

        // menuo kai uzdirbta maziausiai?
        if (item.income && item.income < minIncomeMonthValue) {
            minIncomeMonthValue = item.income;
            minIncomeMonthIndex = i;
        }

        // menuo kai uzdirbta daugiausiai?
        if (item.income && item.income > maxIncomeMonthValue) {
            maxIncomeMonthValue = item.income;
            maxIncomeMonthIndex = i;
        }

        // menuo kai isleista maziausiai
        if (item.expense && item.expense < maxExpenseMonthValue) {
            minExpenseMonthValue = item.expense;
            minExpenseMonthIndex = i;
        }

        // menuo kai isleista daugiausiai
        if (item.expense && item.expense > maxExpenseMonthValue) {
            maxExpenseMonthValue = item.expense;
            maxExpenseMonthIndex = i;
        }

        HTML += `<div class="table-row">
                    <div class="cell">${i + 1}</div>
                    <div class="cell">${monthNames[item.month - 1]}</div>
                    <div class="cell">${formatMoney(item.income)}></div>
                    <div class="cell">${formatMoney(item.expense)}></div>
                    <div class="cell">${formatMoney(balance)}></div>
                </div>`;
    }

    const tableContentDOM = document.querySelector('.table-content');
    const footerIncomeDOM = document.querySelector('.table-footer > .cell:nth-of-type(3)');
    const footerExpenseDOM = document.querySelector('.table-footer > .cell:nth-of-type(4)');
    const footerBalanceDOM = document.querySelector('.table-footer > .cell:nth-of-type(5)');
    const minIncomeDOM = document.querySelector('#minIncome');
    const maxIncomeDOM = document.querySelector('#maxIncome');
    const minExpenseDOM = document.querySelector('#minExpense');
    const maxExpenseDOM = document.querySelector('#maxExpense');

    tableContentDOM.innerHTML = HTML;

    footerIncomeDOM.innerText = formatMoney(income);
    footerExpenseDOM.innerText = formatMoney(expense);
    footerBalanceDOM.innerText = formatMoney(balance);

    minIncomeDOM.innerText = monthNames[minIncomeMonthIndex];
    maxIncomeDOM.innerText = monthNames[maxIncomeMonthIndex];
    minExpenseDOM.innerText = monthNames[minExpenseMonthIndex];
    maxExpenseDOM.innerText = monthNames[maxExpenseMonthIndex];
}

renderTable(months, account);
