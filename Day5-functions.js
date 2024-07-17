
//Day5:Functions in Js.
/*Activity 1: Function Declaration*/

/*Task 1:  Write a function to check if a number is even 
or odd and log the result to the console.*/
console.log(`---------Activity-1,Task 1:Function Declaration for Even/Odd .---------------`);
const num=10;
function EvenOrOdd(num){
  num%2===0?console.log(`${num} is even.`):console.log(`${num} is odd.`);
}
EvenOrOdd(num);


/* Write a function to calculate the square of a number and return the result.*/
console.log(`---------Activity-1,Task 2:Function Declaration for Square of a Number ---------.`);
function square(num){
    const result =console.log(`Square of ${num} is ${num*num}`);
    return result;
}
square(num);


/*Activity 2:Function Expression */

/* Task 3: Write a function expression to find the maximum of two numbers 
and log the result to the console.*/
const num1=15;
const num2=25;
console.log('------Activity-2,Task 3: Maximum of 2numbers----------');
const maxOfTwoNumbers=function(num1,num2){
 num1>num2?console.log(`${num1} is maximum.`):console.log(`${num2} is maximum.`);
}
maxOfTwoNumbers(num1,num2);


/*Task 4: Write a function expression to concatenate two strings and return the result.*/
console.log(`-----------Activity-2,Task 4:Concatenate 2 Strings--------------- `)
const firstName="Mann";
const lastName="Merwana";
const stringConcatenation=function(firstName,lastName){
    const result=console.log(firstName+lastName);
    return result;
}
stringConcatenation(firstName,lastName);


/*Activity-3:Arrow Functions*/

/*Task 5: Write an arrow function to calculate the sum of two numbers and return the result.*/
console.log('---------Activity-3,Task 5:Arrow Function to calculate sum of 2 nums.--------------');
const calculateSum=(num1,num2)=>{
    return num1+num2;
}
console.log(`Sum of ${num1} and ${num2} is : ${calculateSum(num1,num2)}`);

/* Task 6:  Write an arrow function to check if a string contains a specific character and return a boolean value.*/
console.log('---------Activity-4,Task 6:Arrow function to check if a string contains a specific characters.-----------');
const letter='M'
const isCharacterPresent=(firstName,letter)=> {
    return firstName.includes(letter);
}
console.log(isCharacterPresent(firstName,'M'));
console.log(isCharacterPresent(firstName,'Y'));



/* Activity 4: Function Parameters and Default Values */

/*Task 7:   Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.*/
console.log('----------Activity-4,Task 7:Function Parameters and Default Value.')
function productOfTwoNumbers(num1,num2=20)// default value of second parameter is 20.
{
return num1*num2;
}
console.log(`Product of ${num1} and ${num2} is ${productOfTwoNumbers(num1,num2)}.`);
console.log(`Product of ${num1} and ${num2} is ${productOfTwoNumbers(num1)}.`);


/*Task 8:Greeting Message. */
console.log('--------Activity-4,Task 8:Greeting Message--------------');
const greetings=(firstName,age=18)=>{
return ` Your Name is :${firstName} and your age is ${age} . `;
}
console.log(greetings(firstName));
console.log(greetings(firstName,22));
/* Activity 5: Higher-Order Functions*/
/*Task 9: */

console.log('---------Activity 5,Task 9: Higher Order Functions.--------------');
const value=3;
function pureFunction(){
    
    console.log('I am loving Javascript. :)');
}
function higherOrderFunctions(pureFunction,value){
       console.log('Inside a higher order function.');
       console.log(`Pure Function executed ${value} times,by using high order function.`);
        for(let i=0;i<value;i++){
        pureFunction();//function executed 
        }

}
higherOrderFunctions(pureFunction,value);

/* Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result. */
console.log('------------Task 10:  Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.--------');
const number=714;
function reverseOfaNumber(number){
    let rev=0;
    let copy=number;
    while(number>0){
        let rem=number%10;
        rev=rev*10+rem;
        number=Math.floor(number/10);

    }

    return rev;
    

}
console.log(`Reverse of ${number} is ${reverseOfaNumber(number)}`);

const number2=131;
function isPalindrome(number2){
    reverseOfaNumber(number2)===number2?console.log('Palindrome'):console.log('Not a Palindrome.');

}
isPalindrome(17);

function calculatePower(number2){
const ans= Math.pow(number2,2);
return ans;
}

function hiOrderFuncOfTwoFuncs(calculateSum,calculatePower,number2){
    let result=calculateSum(number2,num2);//applied first func to the value.
   console.log(` Power of ${result} is ${calculatePower(result)}`);//applied second func to the result of first function. 
}
hiOrderFuncOfTwoFuncs(calculateSum,calculatePower,number2);