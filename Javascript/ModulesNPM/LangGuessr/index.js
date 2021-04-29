const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];

const langCode = franc(input);

if(langCode === 'und') {
    console.log("Sorry, couldn't figure it out! Please adjust phrase and try again!".red)
} else {
    const language = langs.where("3", langCode);
    console.log(language.name.green);
}