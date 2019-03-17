var elements = document.getElementsByClassName('price')
var prices = [] 

for (let price of elements) { 
    prices.push(parseInt(price.innerText.split('$')[1]) )  
}

function addItem() { 
    let newVal = document.getElementById('amount-input')
    let name = document.getElementById('name-input').value;
    let total = document.getElementById('total');
    let newPrice = prices.reduce((acc, curr) => acc + curr)
    let list = document.getElementById('expense-list');
    let newExpenseFull = document.createElement('li');
    let newItemPriceFlex = document.createElement('div');
    let img = document.createElement('img');
    let item = document.createElement('h1');
    let price = document.createElement('h1')

    value = newVal.value
    item.innerText = name
    total.innerText = `$${newPrice}`
    price.innerText = `$${value}`

    parseInt(value) ? prices.push(parseInt(value)) : alert('Please enter a valid price')

    img.setAttribute('class', 'delete-button')
    img.setAttribute('src', './assets/trash_can.svg')
    item.setAttribute('class', 'item')
    price.setAttribute('class', 'price')
    newItemPriceFlex.setAttribute('class', 'item-price-flex')
    newExpenseFull.setAttribute('class', 'expense-full')

    newItemPriceFlex.appendChild(item)
    newItemPriceFlex.appendChild(price)
    newExpenseFull.appendChild(newItemPriceFlex)
    newExpenseFull.appendChild(img)
    list.appendChild(newExpenseFull)

    newVal.value = ''
    name.value = ''
}