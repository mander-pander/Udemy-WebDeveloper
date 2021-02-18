//The arguments object is available inside every function.
//It's an array-like object:length property, does not have array methods like push/pop
//Contains all the arguments passed to the function
//Not available inside of the arrow functions

// function sum() {
//     return arguments.reduce((total, el) => total + el)    
// }

function sum(...nums){
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

