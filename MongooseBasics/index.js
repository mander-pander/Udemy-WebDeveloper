const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("connection open!")
})
.catch(err => {
    console.log("Uh oh! Error!")
    console.log(err);
})


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);
//name is uppercase and singular('Movie')
//mongoose will make it plural and lowercase
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13 '}
// ])
// .then(data => {
//     console.log("It worked!")
//     console.log(data);
// })
//do not need to call save when we use this method

// Movie.find({year: {$lte: 1990}}).then(data => console.log(data))
//returns films made 1990 or earlier
// Movie.updateOne({title: 'Amadeus'}, {year: 1984}).then(res => console.log(res))
// Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.7}, {new: true}).then(m => console.log(m))
//logs object with updated change ^
// Movie.remove({'_id': '6081f592e90c580f559c72ec'}).then(msg => console.log(msg))