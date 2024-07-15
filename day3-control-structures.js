//Day-3 Control Structures
// If-Else Statements
//1) Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const num=7;
if(num>0){
    console.log(`${num} is positive.`);
}
else if(num<0)
{
    console.log(`${num} is negative.`);
}
else{
    console.log(`${num} is 0.`);

}

const age=21;
if(age>=18){
    console.log('Eligible to vote.');
}
else{
    console.log("Not eligible to vote.");
}
console.log(`----------Activity1-Number Check  Script ----------------`);
function checkNum(num){
    num > 0?console.log(`${num} is positive.`):num===0?console.log(`${num} is 0.`):console.log(`${num} is negative.`);

}
checkNum(num);
console.log(`----------Activity2-Vote Check Script ----------------`);
function voteEligibility(age){
    age<=18?console.log(` As ${age} is <=18,You cannot vote`):console.log(`You can vote as ${age} is >=18.`);

}
voteEligibility(age);
console.log(`----------Activity2 -Nested If Else ----------------`);
// Activity 2: Nested if else
//Write a program to find the largest of three numbers using nested if-else statements.
const num1=19;
const num2=11;
const num3=7;

if(num3>num2)
    {
      if(num3>num1)
        {
         console.log(`${num3} is greater.`);
        }
    }
else if(num2>num1)
    { 
         if(num2>num1){
                       console.log(`${num2} is greater.`);
                      }
    }
else{
    console.log(`${num1} is greater.`);
}
console.log(`----------Activity3 -Switch Case ----------------`);
const day=6;
switch(day)
{
    case 1:
            Text:"Monday";
            break;
    case 6 :
        console.log(`${day} is Saturday.`)
             break;
    default : 
              console.log(`Not a valid week day.`);

            
}
// console.log(`----------Activity3,Task 5 -Switch Case  ----------------`);
// const score= 77;

// switch(true){

//     case score >= 90:
//     console.log( ` You got A grade as your score is ${score}`);
//     break;
//     case score >= 80:
//     console.log(` You got B grade as your score is ${score}`);
//     break;
//     case score >= 70:
//     console.log(` You got C grade as your score is ${score}`);
//     break; 

//     case score >= 60:
//     console.log(` You got D grade as your score is ${score}`);
//     break;

//     case score >= 50:
//     console.log(` You got E grade as your score is ${score}`);
//     break;
    
//     default:
//     console.log(` You failed, as your score is ${score}`);
//     break;                              
    
                         
// }

console.log(`----------Activity4 -Ternary Operator ----------------`);
num%2==0?console.log(`${num} is even.`):console.log(`${num} is odd.`);

console.log(`----------Activity5-Leap Year Script ----------------`);

const isLeapYear= (year)=>{
   ( (year%4===0)&& (year%400===0 ||year%100!=0))?console.log(`${year} is a leap year.`):console.log(`${year} is not a leap year.`);
}
isLeapYear(2024);
isLeapYear(2000);
isLeapYear(2023);

