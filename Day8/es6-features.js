//DAY8-ES6+ FEATURES
console.log('-----Task1,2:Template Literals------------');
const userName='Mann';
const age=22;
console.log(`Used Template Literal${``} .UserName is ${userName} and age is :${age}`);

console.log(`Using Multiline String.\n My name is :${userName}`);

console.log('---------Destructuring-----------');
const array=[7,8,9];
let [firstElement,secondElement]=array;//destructured ,short form of ,let firstElement=array[0];
console.log(array);
console.log(`First element of array is ${firstElement} and Second Element is :${secondElement} `);
console.log('---Object Destructuring---');
const book={
    title:'Believe in Yourself',
    author:'Jeff Murphy'
};
let {title,author}=book;
console.log(book);
console.log(`Title of the book is :${title} and Author of the book is :${author}`);

console.log('-----------Task5,6Spread and Rest Operator-------------');
console.log('---------Task-5,Spread Operator------');
const arr=[1,2,3,...array];
console.log(`Existing array:${array}`);
console.log(`New array with existing elements:${arr}`);
console.log('----------Rest Operator-------------');

const add=(...numbers)=>{
   
   let sum=0;
    numbers.forEach((num)=>{
     sum+=num;
    })
 
     console.log(`Rest parameter sum values are:${sum}`);
};
add(7,7,7);

console.log('------------Task-7(Default Parameter)-------------');
const num1=10;
const num2=7;
function product(num1,num2=10){
    const prod= num1*num2;
    return prod;
}
console.log(`Product of ${num1} and ${num2} without second parameter is :${product(num1)}`);
console.log(`Product of ${num1} and ${num2} with second parameter(default parameter) is :${product(num1,num2)}`);

console.log('------Enhanced Object Literals---------');
console.log('Task8:------')
const firstName='Mann';
const lastName='Merwana';
const learningStatus='with moderate speed';

const learner={
    firstName,
    lastName,
    learningStatus,
    learningMotto(){
        return(`${this.firstName} ${this.lastName} is learning js  ${this.learningStatus}`);
    },
    userInfo(){
        console.log(`First name of user is :${firstName} and Last name of the user is:${lastName}`);
    }
};
console.log(learner);
console.log(`Learning motto is :${learner.learningMotto()}`);
learner.userInfo();
console.log('Task 9:');
const property1="name";
const property2="gender";//property name is gender
const property2Value="Male";// assigns gender male to gender property.
const property3="age";
const methodName="userDetails";
const computedObject={
    ...learner,//to access previous methods and properties
    [property1]:"Mann",
    [property2]:property2Value,
    [property3]:22,
    [methodName](){
        console.log(`Name is :${this[property1]},Gender is :${this[property2]},Age is :${this[property3]}`);
    },
};
console.log(computedObject);
computedObject.userDetails();
console.log(`Printing Gender using property2=gender :${computedObject.gender}`);