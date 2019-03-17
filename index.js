var elements = document.getElementsByClassName('price')
var prices = [] 

function updateList() {
    let newVal = document.getElementById('amount-input')
    let value = newVal.value
    if (parseInt(value)) {
        prices.push(parseInt(value)) 

        let name = document.getElementById('name-input').value;
        let list = document.getElementById('expense-list');
        let total = document.getElementById('total');

        let newExpenseFull = document.createElement('li');
        let newItemPriceFlex = document.createElement('div');
        let img = document.createElement('img');

        let item = document.createElement('h1');
        item.innerText = name

        let price = document.createElement('h1')
        price.innerText = `$${value}`

        let newPrice = prices.reduce((acc, curr) => acc + curr)
        total.innerText = `$${newPrice}`

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

        img.addEventListener('click', function () {
             let thisPrice = parseInt(item.parentNode.childNodes[1].innerText.split('$')[1]);
             prices.splice(prices.indexOf(thisPrice), 1)
             total.innerText = `$${prices.reduce((acc, curr) => acc + curr, 0)}`
             item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode)      
        })

        newVal.value = ''
        document.getElementById('name-input').value = ''
    } else { 
        alert('That is not a valid price')
        newVal.value = ''
    }
}


