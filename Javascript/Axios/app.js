// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('Response, waiting to parse...', res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('Data parsed')
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("oops! there was an error!", e)
//     })

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log(res.data.ticker.price)
// })
// .catch(err => {
//     console.log("Oops!", err)
// })


// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     } catch(e) {
//         console.log("Error error", e)
//     }
// }

const jokes = document.querySelector('#jokes');

const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

button.addEventListener('click', addNewJoke)

const getDadJoke = async () => {
    try {
        const config = { headers: {Accept: 'application/json' }}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        // console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
        return "Sorry :( No Jokes available right now."
    }

}