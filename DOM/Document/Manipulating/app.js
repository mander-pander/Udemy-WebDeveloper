const allLinks = document.querySelectorAll('a');

// for(let link of allLinks) {
//     link.innerText = 'I AM A LINK!'
// }; //changes all hyperlinks to say I AM A LINK!

//.innerHTML retrieves full contents including tag name
//.innerText just grabs the actual text in what is showing and ignores elements

// document.querySelector('span').innerText = "Disgusting";

//document.querySelector('a').title = "List of chicken breeds"

// const firstLink = document.querySelector('a');
// firstLink.href //file.///wiki/List_of_chicken_breeds
// //this is going to javascript object

// firstLink.getAttribute('href') // /wiki/List_of_chicken_breeds
// //gets it directly from html

// firstLink.setAttribute('href', 'http://www.google.com')

// const input = document.querySelector('input[type ="text"]');
//input.type = 'password'
//input.type = 'color'
//input.setAttribute('type', 'text')

for(let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

//const h2 = document.querySelector('h2);
//h2.getAttribute('class');
// h2.setAttribute('class', 'purple')
//classList access the class attributes of an element
//h2.classList.add('purple')
//h2.classList.add('border')
//h2.classList.remove('purple')
//h2.classList.contains('purple') --false
//classList.toggles


//.parent returns parent element, only one direct parent
//.children, can be multiple (.children[0], .children[1])
//.childElementCount returns how many
//const = squareImg = .document.querySelector('.square');
//.nextSibling & .previousSibling return node
//.nextElementSibling returns actual next sibling

const newH3 = document.createElement('h3');
newH3.innerText = 'I am a new H3!';
document.body.appendChild(newH3);

//.insertAdjacentElement(position, element);
const h2 = document.createElement('h2');
h2.append("are kinda cute");
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2)

const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

const img = document.querySelector('img');
img.remove();