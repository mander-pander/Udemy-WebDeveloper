//Map creates a new array with the results of calling
//a callback on every element in the array

// const texts = ['rofl', 'lol', 'omg', 'ttyl'];
// const caps = texts.map(function(t) {
//     return t.toUpperCase();
// });

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const doubles = numbers.map(function(num) {
    return num * 2;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite', 
        score: 95
    },
    {
        title: 'Alien', 
        score: 90
    }
]

const movieTitle = movies.map(function(movie) {
    return movie.title;
})

//return an array of trimmed names
const cleanNames = function(arr) {
    return arr.map(function(trim) {
        return trim.trim()
    });
}

