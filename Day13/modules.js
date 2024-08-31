 //named export
 export const challengeName="30 Days Js  on Chai aur Code";
 export const addNumbers=(num1,num2)=>{
    return `Sum of given numbers is :${num1+num2}`;
 }
 export const multiplyNumbers=function(num1,num2){
    return `Multiplication  is ${num1*num2}`;
}
 export function combinedString(string1,string2){
    return`Combined string is :${string1+string2}`;
 }
 export const person={
    name:"Mann",
    country:"India",
    age:22,
   
 }
 export default function isNumEven(num){
    return num%2===0?`Number is Even`:`Number is odd`;
 }
