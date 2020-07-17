console.log(`This the console.`);

let marks=prompt(`Please enter your marks:`);

let r=(marks<=40)?'D':(marks<=50)?`C`:(marks<=60)?`B`:(marks<=80)?`A`:(marks<=90)?'S':(marks<=99)?`SS`:(marks==100)?`SSS`:'NOT APPLICABLE';

console.log(`Your marks is ${marks} ans your grade is ${r}`);