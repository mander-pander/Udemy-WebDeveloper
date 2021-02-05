//scope = variable visibility
//The location where a variable is defined dictates where we have access to that variable

// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }
// console.log(totalEggs);  --totalEggs not defined if attempted to run
//variables defined inside function are limited to that function

// let bird = 'Cardinal';
// function birdWatch() {
//     let bird = 'Blue Jay';
//     console.log(bird); //Blue Jay
// }
// console.log(bird); //Cardinal

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'Hiii!';
// }
// console.log(radius);
// console.log(PI); //PI is not defined

//using let with variables here makes them block scoped
// for(let i =0; i < 5; i++) {
//     let msg = "askldjaklsjfds";
// }

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Superman'];
    function cryForHelp() {
        function inner() {
            for(let hero of heroes) {
                console.log(`Please help us, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}
