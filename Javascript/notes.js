// Use let instead of var to declare a variable. 
//Using const means it cannot be changed.
//You can reassign variables that aren't constants:
//numPieces = 7;
//numPieces += 2; This equates to numPieces = numPieces + 2;
//numPieces ++; This equates to numPieces + 1, it increments by 1;

//strings must be in quotes as seen below

let bestColor = "purple";
let quote = 'You had me at "hello"';

//strings are indexed, each character has a corresponding index (positional number)
//index starts at 0

let animal = "Dumbo Octopus";
animal[0]; //Will return D
animal[1]; //Will return u
animal[6]; //Will return O (space counts as index)
animal[99]; //Returns undefined

let phone = "(231)345-1344";
//is first character an opening parentheses?
phone[0] //returns (

animal.length //returns 13 due to Dumbo Octopus having that many characters.
//index is one less than total length
//strings can be added together

"lol" + "lol" //returns "lollol"; they're concatenated

let firstName = "River";
let lastName = "Pheonix";
firstName + lastName; //returns "RiverPheonix"
firstName + " " + lastName  //"River Pheonix"
let fullName = firstName + " " + lastName;

//adding a number and string will change it all to a string
//1 + "hi" = typeof string. "1hi"

//thing.method()
let msg = "leave me along right now please";
msg.toUpperCase();//this will uppercase everything
//msg will still be lowercase. save uppercase by assigning to variable
let angryMsg = msg.toUpperCase();

//Can no more than one method. Trim removes excess whitespace.
//greeting.trim().toUpperCase();

let tvShow = "catdog";
tvShow.indexOf("cat"); // 0
tvShow.indexOf("dog"); // 3
tvShow.indexOf("z"); // -1 (not found)

let phrase = "haha that is so funny!";
phrase.slice(5); //"that is so funny!"
//phrase still full sentence as originally declared
phrase.slice(5, 9); //"that"; second number is up to but not including

phrase.replace('haha', 'teehee'); //only replaces first instance
//"teehee that is so funny!"

"lol".repeat(4); //lollollollol

//Literals

let product = 'Artichoke';
let price = 2.25;
let qty = 5;
"You bought " + qty + " " + product + ". Total is: " + price * qty
//You bought 5 Artichoke. Total is: 11.25
//There's a better way!

`You bought ${qty} ${product}. Total is: $${price*qty}`

//Null = "Intentional absence of any value". Must be assigned.
//Undefined = Variables that do not have an assigned value are undefined.

//No one is logged in yet:
let loggedInUser = null; //value is explicitly nothing
//A user logs in:
loggedInUser = 'George Washington';

//Math is an object with nested methods
Math.floor(23.90); //chops off decimal = 23
Math.ceil(34.1); //rounds up = 35

//Math.random gives random number between 0 and 1
Math.random() * 5 //gives number between 1 and 5
Math.floor(Math.random() * 5) //number between 0 and 4
Math.floor(Math.random() *5) + 1//number between 1 and 5

//Comparison operators return boolean
1>3 = false;
1<3 = true;

-1 <= -1 = true;

-1 <= 10 = true;

let age = 23;
age >= 18; //true
//you can also compare strings but be careful

//Equality comparisons

//== checks for equality of value but not equality of type;
//coerces both values to the same type and then compares them

1 == 1; //true
1 == '1'; //true
0 == ''; //true
null == undefined; //true

//=== cares about type and value, no coercion

1 === '1'; //false
0 === false; //false

//!= not equal to; !== strict not equal
1 != 2; //true
1 != '1'; //false
1 !== '1'; //true

//console.log
//console.warn = gives warning sign and color
//console.error = gives error sign and color

//alert causes a popup; alert("Hi!");
//prompt pops up and asks for something; prompt("please enter a number");

//parseInt will convert string to number if applicable


