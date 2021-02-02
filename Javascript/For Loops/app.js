// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

//For Loop Syntax:
// for (
//     [initialExpression];
//     [condition];
//     [incrementExpression]
// )

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// } 

//print even numbers; if you want to skip 0, have I set to 2
//if you want odds, start at 1
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

//countdown from 100

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

//Infinite loops = bad
// for (let i = 20; i >= 0; i++) {
//     console.log(i);
// }
//Infinite loops = very bad.

//for (let i = animals.length - 1; i >= 0; i--) {
// console.log(animal[i]);
//}

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

//Nested loops
// for(let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for(let j = 1; j < 4; j++) {
//         console.log(`     j is: ${j}`);
//     }
// }

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for(let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for(let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}
