const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('dev'))


//Order is important! Middleware needs to be able to be matched when utilized.
app.use((req, res, next) => {
    req.requestTime = Date.now();
    // req.method = "GET";
    //forces all requests to be GET, demoed in postman
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I love dogs!")
    next();
})

// Define error-handling middleware functions in the same way as other middleware functions, 
// except error-handling functions have four arguments instead of three: (err, req, res, next)

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if(password === 'fries'){
        next();
    }
    throw new AppError('password required', 401)
    // res.send('Wrong answer. Please provide password.')
    // res.status(401)
    // throw new AppError(401, 'Password required!')
}

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

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Bark bark')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret: I quickly duck behind different aisles to avoid talking to people I know in grocery stores.')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin. Access denied.', 403)
})

app.use((req, res) => {
    res.status(404).send('Not Found');
})

// app.use((err, req, res, next) => {
//     console.log("************************")
//     console.log("*********ERROR**********")
//     console.log("************************")
//     console.log(err)
//     next(err)
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!'} = err;
    res.status(status).send(message) 
})

//*If you pass anything to the next() function (except the string 'route'), 
//Express regards the current request as being an error and will skip any 
//remaining non-error handling routing and middleware functions.

app.listen(3000, () => {
    console.log('App is running on localhost:300')
})