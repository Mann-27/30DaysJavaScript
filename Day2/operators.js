//Activity 1:arithmetic operators
// add 2 numbers and log result to console.
const num1=15;
const num2=25;
function sum(num1,num2){
    const ans=num1+num2;
    console.log(`Addition of ${num1} and ${num2} is ${ans}`);
}

function multiply(num1,num2){
    const ans=num1*num2;
    console.log(`Multiplication of ${num1} and ${num2} is ${ans}`);
}
function divide(num1,num2){
    const ans=num1/num2;
    console.log(`Division of ${num1} and ${num2} is ${ans}`);
}


function remainder(num1,num2){
    const ans=num1%num2;
    console.log(`Remainder of ${num1} and ${num2} is ${ans}`);
}
function subtraction(num1,num2){
    const ans=num1-num2;
    console.log(`Subtraction of ${num1} and ${num2} is ${ans}`);
}




sum(num1,num2);
multiply(num1,num2);
divide(num1,num2);
remainder(num1,num2);
subtraction(num1,num2);

//assignment operator
let num =7;
num += 6;// num1 = num1+6=> 15+6=21
console.log(num);

//comparison operators
const result=(num2>num1)?(num1<25)?console.log(`${num2} is greater.`):console.log(`${num1} is greater.`):console.log(`${num2} is greater.`)
console.log(,num1==num2,"",num1===num2);
console.log(num1>num2,"",num1<num2);


