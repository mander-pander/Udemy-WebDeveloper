//Spread syntax allows an iterable such as an array to be expanded
//in places where zero or more arguments (for function calls) or elements
//(for array literals) are expected, or an object expression to be 
//expanded in places where zero or more key-value pairs (for object literals)
//are expected

const nums = [9, 3, 2, 8];
Math.max(nums); //NaN
//Use spread!
Math.max(...nums); //9
//Same as calling: Math.max(9,3,2,8)

// console.log(...'hello'); 
//h e l l o

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]
//creates third new array

const feline = { legs: 4, familiy: 'Felidae'};
const canine = { isFurry: true, family: 'Caninae'}

// {...feline} //makes copy
// {...feline, color: 'black'} //adds property

const catDog = {...feline, ...canine};

console.log(catDog)

const numbers = {...[2,4,6,8]};
console.log(numbers); //index is the key: 0:2, 1:4 etc etc


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = {...dataFromForm, id: 2345, isAdmin: false};