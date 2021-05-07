const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))


//Order is important! Middleware needs to be able to be matched when utilized.
app.use((req, res, next) => {
    req.requestTime = Date.now();
    // req.method = "GET";
    //forces all requests to be GET, demoed in postman
    console.log(req.method, req.path);
    next();
})

// app.use((req, res, next) => {
//     console.log("This is my first middleware!")
//     return next();
//     console.log("This is my first middleware after calling next()!")
// })
// app.use((req, res, next) => {
//     console.log("This is my second middleware!")
//     return next();
// })

// app.use((req, res, next) => {
//     console.log("This is my third middleware!")
//     return next();
// })

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page')
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Bark bark')
})

app.listen(3000, () => {
    console.log('App is running on localhost:300')
})