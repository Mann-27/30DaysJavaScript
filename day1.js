//day 1 Variables and data types
//Activity 1:Variable declaration


//Task 1: 
var number=7;
console.log(number);
//Task 2:
let firstName='Mann';
console.log(firstName);

//Activity 2:Constant Declaration
//Task 3: Declare a variable using const,assign it a boolean value and log the value to the console.    
const loggedIn=true;
console.log(loggedIn);

//Activity 3:Datatypes:
//Task 4: 
const price=45;
const username='Mann';
const challengeAccepted=true;
const items={
    type:'Watches',
   ' price':750,
   'brand':'titan'

};
let languages=['Java','C','JavaScript'];
console.log(`Typeof ${price} is : ${typeof(price)}`);
console.log(`Typeof ${username} is : ${typeof(username)}`);
console.log(`Typeof ${challengeAccepted} is :${typeof(challengeAccepted)}`)

console.log(`Typeof ${items} is :${typeof(items)}`);
console.log(`Typeof ${languages} is :${typeof(languages)}`);


//task 5:
let lastName='Merwana';
console.log(`Initial Value is ${lastName}`);
lastName='Shah';//reinitialized value
console.log(`New Value is ${lastName}`);
 let newLastName=lastName;
 newLastName='shah';

console.log(lastName);
console.log(newLastName);

const discount=100;
console.log(` Discount is :${discount}`);
discount=90;


console.log(` New discount is :${discount}`);