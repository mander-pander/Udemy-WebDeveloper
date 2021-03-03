const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents default form submission behavior

    const product = document.querySelector('#product'); //gets product value
    const qty = document.querySelector('#qty'); //gets qty value
    const groceryList = document.querySelector('#list');

    let newLi = document.createElement('li'); //creates new <li> element

    newLi.innerText=`${qty.value} ${product.value}`; //adds input from product and qty as new text on <li> element

    groceryList.append(newLi); //appends the new <li> element to the <ul>

    product.value = ''; //resets product input
    qty.value=''; //resets qty input
})