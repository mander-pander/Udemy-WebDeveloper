//Every tests whether all elements in the array pass the provided
//function. It returns a Boolean value.

const words = ["dog", "dig", "log", "bag", "wag"];

words.every(word => {
    return word.length === 3;
}) //true

words.every(word => word[0] === 'd'); //false

words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g'
}); //true

const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77];

exams.every(score => score >= 75);

//Some is similar to every, but returns true if ANY of the 
//array elements pass the test function

const otherWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

//Are there any words longer than 4 characters?
otherWords.some(word => {
    return word.length > 4;
}); //true

//Do any words start with 'Z'?
otherWords.some(word => word[0] === 'Z'); //false

//Do any words contain 'cake'?
otherWords.some(w => w.includes('cake')); //true

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

movies.some(movie => movie.year > 2015);

const allEvens = numbers => numbers.every(numbers => numbers % 2 === 0);
//returns true if all numbers passed in an array are even