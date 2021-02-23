function renderRows(selector, data, months) {
    const dataLength = data.length;
    const monthsLength = months.length
    const DOM = document.querySelector(selector);
    let HTML = '';
    DOM.innerHTML = '';

    for(let i = 0; i < dataLength; i++){
        let income = data[i].income;
        let expense = data[i].expense;
        let balance = 0;
        let month = months[i]

       
            HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${month}</div>
                    <div class="cell">${data[i].income === undefined? 0 : data[i].income+".00 Eur"}</div>
                    <div class="cell">${data[i].expense === undefined? 0:data[i].expense+".00 Eur"}</div>
                    <div class="cell">${typeof balance === "sintrg"? balance: balance+".00 Eur" }</div>
                </div>`;
    }
    return DOM.innerHTML = HTML;
}

export {renderRows};