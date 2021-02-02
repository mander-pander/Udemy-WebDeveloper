// let count = 0;
// while(count < 10) {
//     count++;
//     console.log(count);
// }

// while(!gameOver) {
//     //player 1 move
//     //player 2 move
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...")
// while(guess !== SECRET) {
//     guess = prompt("enter the secret code...")
// }
// console.log("CONGRATS, YOU KNOW THE SECRET!")

//the break keyword

// let input = prompt("Hey! Say something!")
// while (true) {
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("fine, you win.")

for(let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 100) break;
}
