function renderFooter(selector, data) {
    const DOM = document.querySelector(selector)
    const dataLength = data.length
    let HTML = '';
    let income = 0;
    let expense = 0;
    let expenseSum = 0;
    let incomeSum = 0;
    for(let i = 0; i < dataLength; i++) {
        income = data[i].income;
        expense = data[i].expense;
        if(income === undefined){
            income = 0
        
        } else {
            incomeSum = income + incomeSum
        }
        if (expense === undefined) {
            expense = 0
        } else {
            expenseSum = expense + expenseSum
        }
        HTML =   `<div class="cell"></div>
        <div class="cell"></div>
        <div class="cell ">${incomeSum}.00 Eur</div>
        <div class="cell ">${expenseSum}.00 Eur</div>
        <div class="cell ">${incomeSum - expenseSum}.00 Eur</div>`
    
    
    }
    
    return DOM.innerHTML = HTML

}

export{renderFooter}