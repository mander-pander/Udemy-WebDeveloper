//Functions are reusable procedures
//Allow us to write reusable, modular code
//a chunk of code is defined that can then execute at a later point

//Step 1: Define the function 
//function funcName() {
    //do something
//}

//Step 2: Run the function
//funcName(); run once
//funcName(); run again!

// function grumps() {
//     console.log('ugh...you again...');
//     console.log('for the last time...');
//     console.log('leave me alone...')
// }

function singSong() {
    console.log("Do");
    console.log("Re");
    console.log("Mi");
}

function greet() {
    console.log('Hi!');
}

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

//Arguments refer to inputs accepted by functions
function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName[0]}.!`)
}
// greet('Elvis', 'Presley');


function repeat(str, numTimes) {
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}
