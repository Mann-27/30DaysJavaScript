// Day 12: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
//  Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
const intentionallyThrowError=()=>{
    try{
        throw new Error("Intentional Error");
    }catch(error){
        console.log(`${error}`);
    }
}
intentionallyThrowError();
// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
const divide2nos=(num1,num2)=>{
      try{
        if(num2===0) {
            throw new Error("Denominator cannot be zero");
        }
        console.log(num1/num2);
      }catch(error){
        console.log(` ${error}.`);
      }
}
divide2nos(7,0);
// Activity 2: Finally Block
//  Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
const Task3FinallyDemo=(num1,num2)=>{
    try{
    if(num2===0) {
        throw new Error("Classic Divide by zero  error.");
    }
    console.log(num1/num2);
  }catch(error){
    console.log(error.message);
  }finally{
    console.log('Execution done successfully.');
  }
}
Task3FinallyDemo(5,5);
// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class task4Error extends Error {
    constructor(message) {
      super(message);
      this.name = "customError";
    }
  }
  
  function task4(num1, num2) {
    try {
      if (num2 === 0) {
        throw new task4Error(`This is custom error`);
      }
      console.log(num1 / num2);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  task4(3, 0);
  // Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

  class task5Error extends Error {
    constructor(message){
      super(message);
      this.name="myError";
    }
  }

  function task5(str){
    try{
      if(!str){
        throw new task5Error("This is custom Error-String is empty.")
      }
      console.log(`String passed to the function is ${str}`);
    }catch(error){
      console.log(error.message);
    }
  }
  task5("Mann");
  task5("");//empty string validation

  // Activity 5: Graceful Error Handling in Fetch
//  Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
const url=`https://jsonplaceholder.org/use`;
fetch(url)
.then(response=>{
  if(!response.ok){
    throw new Error(`Invalid Url`);
  }
  return response.json();
})
.then((users)=> {
  console.log(users);
})
.catch((err)=>{
  console.log('Error:',err.message);
})
// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const fetchApi=async(url)=>{
  try{
    const response=await fetch(url);
    if(!response.ok){
      throw new Error("API Not reachable.");
    }
    const data=await response.json();
    console.log(data);
  } catch(error){
    console.log(error.message,"Problem in fetching API");
  }
}
fetchApi(url);