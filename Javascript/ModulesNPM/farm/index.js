const chickens = require('./chickens')
const cows = require('./cows')
const pigs = require('./pigs')

const farmAnimals = [chickens, cows, pigs];
// console.log(farmAnimals);

//node will look for index file when including 
//an entire directory

module.exports = farmAnimals;