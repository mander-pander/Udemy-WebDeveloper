const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!")
//     // res.send("Hey! Here's your response to the request we got!")
//     res.send('<h1>This is my webpage! Cool, huh?</h1>')
// })
//res.send is versatile, can send objects, html, etc too

app.get('/', (req, res) => {
    res.send('Welcome to the home page! :)')
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    // res.send('This is a subreddit!')
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    // res.send('This is a subreddit!')
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
});

app.get('/cats', (req, res) => {
    res.send("Meow")
});

app.post('/cats', (req, res) => {
    res.send('Post request to /cats! This is different than a get request!')
});

app.get('/dogs', (req, res) => {
    res.send("Woof woof")
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched!')
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
});

app.get('*', (req, res) => {
    res.send(`Sorry, I don't recognize that path!`)
})

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})