//Array

//Converting Arrays to Strings
var fruits=[`Orange`,`Apple`,`Mango`,`Banana`];
console.log(fruits)
console.log(fruits.toString());
//join() can also be used 
// syntax: fruit.join(`separator`);

//deleting element
delete fruits[0];
console.log(fruits.toString());//the come was not removed 
fruits[0]=`Orange`;//assigning value in array


//splicing can be used to add item in an array

fruits.splice(2,3,`Passion Fruit`,`Pomelo`);
console.log(fruits,`removing and adding 2 elements.`);

//slice()

var citrus=fruits.slice(0,1);//creating a new array from existing one
console.log(citrus);

//String

var text=`This is this the text`;

//search()
console.log(text.search(`the`));



