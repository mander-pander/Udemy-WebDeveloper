const fs = require('fs');
// console.log(fs)
const folderName = process.argv[2] || 'Project';

//asynchronous version
// fs.mkdir('Cows', { recursive: true }, (err) => {
//     console.log("In the callback!")
//     if(err) throw err;
// });

//synchronous version
// fs.mkdirSync('Donkey');
// console.log("I come after mkdir in the file!!")

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
} catch(e) {
    console.log("Oops, let's try that again.");
    console.log(e);
}