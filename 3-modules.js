// Common js- every file is module(by default)
//MODULES - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require("./6-alternative-flavor")      //returns exports{} object of a file
console.log(require("./7-mind-grenade"));
// console.log(data)


// sayHi('susan');
// sayHi(names.peter);
// sayHi(names.john);