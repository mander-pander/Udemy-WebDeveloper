//Async functions always return a promise.
//If the function returns a value, the promise will be resolved
//with that value.
//If the function throws an exception, the promise will be rejected.

// async function hello() {

// }

// const sing = async () => {
//     // sadffsd.caosd();
//     throw new Error("uh oh")
//     return 'La la la la'
// }

// sing()
//     .then((data) => {
//         console.log("promise resolved with:", data)
//     })
//     .catch(err => {
//         console.log("Oh no, promise rejected")
//         console.log(err)
//     })

const login = async (username, password) => {
    if(!username || !password) throw 'Missing credentials!'
    if(password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid password!'
}

login('asdflkjfa', 'corgifeetarecute')
.then(msg => {
    console.log('Logged in!')
    console.log(msg)
})
.catch(err => {
    console.log('Error!')
    console.log(err)
})

//The await keyword is mostly used inside of functions declared with async.
//Await will pause the execution of the function, waiting for a promise to be resolved.

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


// async function rainbow(){
//     await delayedColorChange('red', 1000)
//     // console.log('hi')
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
//     return 'All done!'
// }

// rainbow().then(() => console.log("End of the rainbow"))

// async function printRainbow() {
//     await rainbow();
//     console.log('End of rainbow!')
// }

// printRainbow();

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('/page1');
        console.log(data1);
        let data2 = await fakeRequestPromise('/page2');
        console.log(data2);
    } catch (e) {
        console.log('Caught an error!')
        console.log('error is:', e)
    }

}
