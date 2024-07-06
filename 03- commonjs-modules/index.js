// console.log(arguments.callee.toString());
// console.log('Vladislav');
// console.log(module);
// console.log(__filename);
// console.log(__dirname);
// console.log(exports);
// console.log(require);

// const exportObj = require('./multiple-exports.js');
// const { name, hobbies, favoritNum } = exportObj;
const { name, hobbies, favoritNum } = require('./multiple-exports.js');

const {
  name: myName,
  myFriendsName,
  myHobbies,
} = require('./export-and-import.js');

const greeting = require('./my-module/single-exports.js');
// console.log(exportObj);

console.log(name);
console.log(hobbies);
console.log(favoritNum);

hobbies.push('run');

greeting(name);

console.log(myName);
console.log(myFriendsName);
console.log(myHobbies);
