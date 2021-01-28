// Making an array:
const colors = ["red", "orange", "yellow"];
//To make an empty array
//let students = [];
//A mixed array
//let stuff = [true, 68, 'cat', null, NaN];

// Arrays are indexed like strings, starting at 0:
colors[0]; // "red"
colors[3]; //undefined
colors[1][0];//"O"

//you can also change with this method
//colors[0] = "green"; becomes ["green", "orange", "yellow"]

// They have a length:
colors.length; //3


// Important array methods:
//push(value) - adds value to the END of an array
let movieLine = ['Tom', 'Nancy'];
movieLine[2] = 'Pablo'
movieLine.push('Oliver');
//['Tom', 'Nancy', 'Pablo', 'Oliver']

//pop() - removes and returns last value in array
movieLine.pop()
//removes 'Oliver'
//nothing gets passed into ()

let barbell = [];
barbell.push(45);
barbell.push(45);
barbell.push(25);
barbell.push(10);
barbell.push(2.5);
//barbell = [45, 45, 25, 10, 2.5]
barbell.pop()
//2.5
barbell.pop()
//10


//unshift(val) - adds value to START of an array
checkoutLine = [];
checkoutLine.push('Jerry', 'Dennis', 'Kevin', 'Carly');
checkoutLine.unshift('VIP');
//'VIP', 'Jerry', 'Dennis', 'Kevin', 'Carly'
//checkoutLine.shift() = 'VIP'

//shift() - removes and returns first element in an array
movieLine.shift()
//'Tom'

//concat merges two or more arrays
let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];
let combo = cats.concat(dogs);
//['blue', 'kitty', 'rusty', 'wyatt']

//include produces boolean
cats.includes('blue'); //true
cats.includes('Blue'); //false

//indexOf works similar to how it works with string
combo.indexOf('rusty'); // 2
combo.indexOf('blue'); //0

//reverse - reverses array; changes original (destructive)
combo.reverse();
//'wyatt', 'rusty', 'kitty', 'blue' - this is now what combo is set to

//slice gets a portion of an array
let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//rainbow.slice(); makes copy
//rainbow.slice(3); goes from index of 3 to end of array (provides starting point) - can also save to a new variable
rainbow.slice(2,4) // 'yellow' and 'green', goes up to 4, not including
//negative index starts from end of array
rainbow.slice(-2) //last two

//splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//define where to start, how many to delete, and what to replace it with
rainbow.splice(5,1) //returns and deletes indigo
//rainbow.splice(5,2) would have deleted two items starting at indigo
rainbow.splice(1,0,'red-orange');
//returns 'red', 'red-orange', 'orange', 'yellow', 'green', 'blue', 'violet';

//sort = sorts an array
let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
//scores.sort() will return based on first digit

//Reference Types & Equality Testing
['hi', 'bye'] === ['hi', 'bye'] //returns false
//arrays are stored distinct 
let nums = [1,2,3];
let numsCopy = nums;
nums === numsCopy //true

//const can be used for arrays as the stuff inside the array can still be changed 

//nested arrays - arrays inside other arrays
const gameBoard = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O', 'X']]
gameBoard[1][1] //returns null



