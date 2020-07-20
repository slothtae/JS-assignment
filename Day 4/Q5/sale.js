console.log(`The Console.`);

let n=prompt(`Input your sales:`);
var c;
// if(n<=5000){
//     c=2;
// }
// else if(n<=){
//     c=;
// }
// else if(n<=){
//     c=;
// }
// else if(n<=){
//     c=;
// }

c=(n<=5000)?2:(n<=10000)?5:(n<=20000)?7:10;

console.log(`Your comission is ${c}`);
document.write(`Your comission is ${c}%.`);