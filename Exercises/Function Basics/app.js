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

function multiply(x,y) {
    return x * y;
}

function isShortsWeather(temp) {
    if(temp >= 75) {
        return true;
    } else {
        return false;
    }
}


//return last element of array without removing the element
//return null if array is empty

function lastElement(arr) {
    if(arr.length === 0) {
        return null;
    }
    const last = arr[arr.length -1];
    return last;
}

//Accepts string and capitalizes first letter only
function capitalize(str) {
    let firstLetter = str.slice(0, 1).toUpperCase();
    let restStr = str.slice(1);
    return firstLetter + restStr;
}

//Accepts an argument of an array of numbers
//Sums the numbers in array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//return day of week; return null if greater than 7 or less than 1

function returnDay(num) {
    let days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };
    if(num > 7 || num < 1) {
        return null;
    } else {
        return days[num];
    }
}