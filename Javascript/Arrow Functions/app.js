//compact alternative to a regular function expression

const square = x => {
    return x * x;
}
//Parenthesis not needed for single argument (above)

const sum = (x, y) => {
    return x + y;
}

// const add = function(x,y) {
//     return x + y;
// }

// function add(x,y) {
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

const greet = (name) => {
    return `Hey ${name}!`
}

//return keyword can be left off in certain situations
const rollDie = () => (
     Math.floor(Math.random() * 6) + 1
)

const subtract = (a,b) => a - b;

const isEven = num => num % 2 === 0;

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

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score/10}`
// })

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score/10}`
))

//The keyword 'this' behaves differently with an arrow function
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
       return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000)
    }
}

