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