//If Statement runs code if given condition is true

// console.log("Before Conditional")

// let random = Math.random();

// if (random < 0.5) {
//     console.log("Your number is less than 0.5!!!");
//     console.log(random);
// } else {
//     console.log("Your number is greater than or equal to 0.5!!!")
//     console.log(random);
// }

// if (random >= 0.5) {
//     console.log("Your number is greater than 0.5!!!");
//     console.log(random);
// }

// console.log("After Conditional")

//Else If; if not the first thing, maybe the other thing?
//Else; if nothing else was true, do this

// const dayOfWeek = prompt('Enter a day').toLowerCase();

// if(dayOfWeek === 'monday') {
//     console.log("I HATE MONDAYS")
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay I love Saturdays!")
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent, especially after work!")
// } else {
//     console.log("Meh.")
// }

// 0-5 - free 
// 5-10 - child $10
// 10-65 adult $20
// 65+ senior $10

// const age = 65;

// if (age < 5) {
//     console.log("You are a baby you get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// } else  { 
//     console.log("You are a senior. You pay $10")
// }


const password = prompt("please enter a new password");

//Password must be 6+ characters
if (password.length >= 6) {
    //Password cannot include spaces
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Password too short. Must be 6+ characters!")
}
//Password cannot include space
// if (password.indexOf(' ') === -1) {
//     console.log("No spaces present!")
// } else {
//     console.log("Password cannot contain spaces!")
// }