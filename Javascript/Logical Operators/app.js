//AND = &&; both sides must be true for the entire thing to be true
//true && true = true
//true && false = false
//false && false = false
//1 === 1 && 2 < 7 = true

// const password = prompt("Enter your password");
// if(password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password!")
// } else {
//     console.log("Incorrect format for password!")
// }

//OR = ||; if one side is true, the entire thing is true
// 1 !== 1 || 10 === 10; true
// 0 || undefined; false
// 10/2 === 5 || null; true

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

// const age = 7;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("FREE");
// }  else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("Invalid Age!")
// }
//&& has precedence over ||

//NOT = !; !expression returns true if expression is false
// !null; true
// ! (0 === 0); false
// ! (3 <= 4); false
// !false; true
 
// const firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("Try Again!!");
// }

const age = 6;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or a senior.")
}