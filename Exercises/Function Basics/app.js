function printHeart() {
    console.log('<3');
}
printHeart();

function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

rant('wahoo');

function isSnakeEyes(firstRoll, secondRoll) {
    let total = firstRoll + secondRoll;
    if(total === 2) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}