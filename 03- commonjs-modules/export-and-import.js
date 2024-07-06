const { name, hobbies } = require('./multiple-exports');

const myFriendsName = 'Alice';
module.exports.name = name;
module.exports.myFriendsName = myFriendsName;
module.exports.myHobbies = hobbies;
