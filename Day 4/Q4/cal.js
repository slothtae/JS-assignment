console.log(`The console.`);
let s = prompt(`Please Enter your choice.
1.Addition
2.Subtraction
3.Multiplication
4.Division
5.Square-root
6.Precentage`);

function add(num,num1){
    let sum= +num + +num1;
    return sum;
}
function sub(num,num1){
    let su= +num - +num1;
    return su;
}
function mul(num,num1){
    let mu= +num * +num1;
    return mu;
}
function div(num,num1){
    let du= +num / +num1;
    return du;
}
function per(num,num1){
    let pu= (+num / +num1)*100;
    return pu;
}
    

if(s==1){ 
    let a1 = prompt('Enter first number:');
    let b1 = prompt('Enter second number:');
    let r1 = add(a1,b1);
    console.log(`sum of ${a1} and ${b1} is ${r1}.`);
    document.write(`sum of ${a1} and ${b1} is ${r1}.`);

}   
else if(s==2){
    let a2 = prompt('Enter first number:');
    let b2 = prompt('Enter second number:');
    let r2 = sub(a2,b2);
    console.log(`Difference of ${a2} and ${b2} is ${r2}.`);
    document.write(`Difference of ${a2} and ${b2} is ${r2}.`);
}
else if(s==3){
    let a3 = prompt('Enter first number:');
    let b3 = prompt('Enter second number:');
    let r3 = mul(a3,b3);
    console.log(`Product of ${a3} and ${b3} is ${r3}.`);
    document.write(`Product of ${a3} and ${b3} is ${r3}.`);
}
else if(s==4){
    let a4 = prompt('Enter first number:');
    let b4 = prompt('Enter second number:');
    let r4 = div(a4,b4);
    console.log(`${a4} / ${b4} is ${r4}.`);
    document.write(`${a4} / ${b4} is ${r4}.`);
}
else if(s==5){
    let a5 = prompt('Enter the number:');
    let r5 = Math.sqrt(a5);
    console.log(`Square-root of ${a5} is ${r5}.`);
    document.write(`Square-root of ${a5} is ${r5}.`);
}
else if(s==6){
    let a6 = prompt('Enter number whose % we want:');
    let b6 = prompt('Enter principle number:');
    let r6 = per(a6,b6);
    console.log(`(${a6} / ${b6})*100 is ${r6}.`);
    document.write(`(${a6} / ${b6})*100 is ${r6}.`);
}
else {
    console.log(`Invalid Input`);
    document.write(`Invalid Input`);
}