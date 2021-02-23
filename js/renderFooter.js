function renderFooter(selectorOne,selectorTwo, selectorThree , data) {
    const DOMone = document.querySelector(selectorOne)
    const DOMtwo = document.querySelector(selectorTwo)
    const DOMthree = document.querySelector(selectorThree)
    const dataLength = data.length

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
    
    
    }
    
    return DOMone.innerHTML = `${incomeSum}.00 Eur`, DOMtwo.innerHTML = `${expenseSum}.00 Eur`, DOMthree.innerHTML= `${incomeSum - expenseSum}.00 Eur`

}

export{renderFooter}