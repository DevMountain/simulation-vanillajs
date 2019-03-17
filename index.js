var elements = document.getElementsByClassName('price')
var prices = [] 

for (let price of elements) { 
    prices.push(parseInt(price.innerText.split('$')[1]) )  
}

function addItem() { 


    //grab all the elements with an id of amount-input. 
    let newVal = document.getElementById('amount-input')

    //get value of name
    let name = document.getElementById('name-input').value;

    //get the value of that input (the value entered by the user)
    value = newVal.value
     
    //The value will be a string. parseInt will convert it to an number. If its not a number, you get an alert and nothing is added to prices array
    parseInt(value) ? prices.push(parseInt(value)) : alert('Please enter a valid price')

    //reset the value of the input (text box will empty out after submitting)

    //Now I have to update the text on the header. To do that, I first need to grab the element, which I gave an ID of "total"
    let total = document.getElementById('total');

    //add up all of the prices and save it into a variable
    let newPrice = prices.reduce((acc, curr) => acc + curr)

    //Set the total to newPrice
    total.innerText = `$${newPrice}`

    //grab the list element
    var list = document.getElementById('expense-list');

    //create the new list item
    var newExpenseFull = document.createElement('li');


    //create new div to hold <price,item>, and img
    var newItemPriceFlex = document.createElement('div');

    //create image
    var img = document.createElement('img');

    //add class to image
    img.setAttribute('class', 'delete-button')
    img.setAttribute('src', './assets/trash_can.svg')

    //create text for item
    var item = document.createElement('h1');
    item.innerText = name

    //set the class for item
    item.setAttribute('class', 'item')

    //create new price h1
    var price = document.createElement('h1')

    //add class to price
    price.setAttribute('class', 'price')
    price.innerText = `$${value}`

    //add classnames
    newItemPriceFlex.setAttribute('class', 'item-price-flex')
    newItemPriceFlex.appendChild(item)
    newItemPriceFlex.appendChild(price)
    newExpenseFull.appendChild(newItemPriceFlex)
    newExpenseFull.appendChild(img)
    newExpenseFull.setAttribute('class', 'expense-full')
    list.appendChild(newExpenseFull)

    newVal.value = ''
    name.value = ''
    
    
}