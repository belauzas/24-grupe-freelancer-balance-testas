function renderRows(selector, data, months) {
    const dataLength = data.length;
    const monthsLength = months.length
    const DOM = document.querySelector(selector);
    let HTML = '';
    DOM.innerHTML = '';
    let income = 0;
    let expense = 0;
    let balance = 0;
    let allMonths = 0;
    for(let i = 0; i < dataLength; i++){
        income = data[i].income;
        expense = data[i].expense;
        balance = 0;
        allMonths = months[i]
        balance = income - expense;
        
         if(income === undefined) {
                balance = expense * (-1);
         }
        if(expense === undefined) {
                balance = income;
        
        }
        
            HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${allMonths}</div>
                    <div class="cell">${income === undefined? "-": income+".00 Eur"}</div>
                    <div class="cell">${expense === undefined? "-": expense+".00 Eur"}</div>
                    <div class="cell">${balance+".00 Eur"}</div>
                </div>`;
    }

    return DOM.innerHTML = HTML;
}

export {renderRows};