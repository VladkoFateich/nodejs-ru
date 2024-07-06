// console.log(module); //module is not defined in ES module scope
// console.log(arguments.callee.toString()); //arguments is not defined

import { season, year, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getDataFromServer, { user as userData } from './default-exports.mjs';
import DEFAULT_SERVER, { USERNAME, PASSWORD } from './mixed-exports.mjs';

console.log(season, year);
console.log(`isRaining: ${isRaining}`);
console.log(`humidity: ${humidity}`);
console.log(userData);
getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

console.log(DEFAULT_SERVER);
console.log(USERNAME, PASSWORD);
