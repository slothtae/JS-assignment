console.log(`This is the console`);

var name = prompt(`Please enter your OS ans its version with a space in between:`);

// console.log(name,typeof(name));
var re =name.split(' ');
console.log(`The OS name is ${re[0]} and the version is ${re[1]}`);