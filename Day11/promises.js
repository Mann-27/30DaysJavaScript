/*task 1: create a promise that resolves with a message after a 2 second timeout and log the message to the console. */
const resolvePromise=new Promise(function(resolve,reject){
 setTimeout(function(){
    console.log("This is a promise and will be resolved after 2 seconds.");
    resolve("Promise resolved");
 },2000)
})
resolvePromise.then(function(){
    console.log("Promise resolved after 2 seconds.");
})
.catch((error)=>console.log('Error is:',error));
//task2:create a promise that rejects with an error message after a 2 second timeout and handle the error using catch.
const rejectPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        const msg="A promise to reject with an error msg.";
        let error=true;
        if(!error){
            resolve(msg);
        }
        else{
            reject("ERROR:Username not found.");
        }
    },2000);
});
rejectPromise.
then(function(msg){
    console.log("Promise is resolved with msg:",msg);
    
})
.catch(function(error){//catch block ,when promise is rejected and error is thrown.
    console.log("Promise rejected with error:",error);
})

//Activity 2: Chaining Promises

// task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const  fetchData1 =()=> {
    return new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Fetching data from server 1.")
    resolve('Data 1 fetched');
    },1000)
 })
}
const fetchData2=(f1Status)=> {
    return new Promise(function (resolve,reject){
    setTimeout(function(){
   console.log(f1Status + ' and now fetching data from server 2.');
   resolve('Data 2 fetched');
    },1000)
 })
}
const fetchData3=(f2Status)=> {
    return new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log(f2Status + " and now fetching data from server 3.");
    resolve('Data 3 fetched');
    },1000)
 })
}
 fetchData1()
 .then(function(f1msg){
    console.log(f1msg);
    return fetchData2(f1msg);
 })
 .then(function(f2msg){
    console.log(f2msg);
    return fetchData3(f2msg);
 })
 .then((msg)=>{
    console.log(msg);
 })
 .catch((error)=>{
    
    console.log("Error while fetching data.",error)
});

 //Activity 3: Using Async/Await
 // task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

 const fnTask4=()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise resolved for Task 4 .");
        },1000);
      });
 };
async function logResolvedValue(){
    try {
        const resolved=await fnTask4();
        console.log("Resolved value:",resolved);
    } catch (error) {
        console.log("Error:",error);
    }
}
logResolvedValue();
// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const fnTask5=(err) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!err)resolve("Task 5 resolved.");
        else reject("ERROR in Task 5,Task 5 not completed.");
    },1000);
  })
};
const handleRejectedPromise=async(flg)=>{
    try{
        const result=await fnTask5(flg);
        console.log(result)
    } catch(error){
        console.log("Error",error)
    }
};
handleRejectedPromise(true);
// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const url=("https://jsonplaceholder.typicode.com/users");
fetch(url)
.then((response)=>{
    if(!response.ok){
        throw new Error(`Network Problem`);
    }
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(`Error:`,error);
});

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const handleFetchApi=async(fetchUrl)=>{
    try {
        const response=await fetch(fetchUrl);
        if(!response.ok){
            throw Error(`network problem`);
        }
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error is,`,error);
        
    }
}
handleFetchApi(`https://jsonplaceholder.typicode.com/users/7`);
// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

let task8Promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Task8,promise 1:");
        resolve("First Promise Resolved after 1 sec.");
    },1000);
});
let task8Promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Task8,promise 2:");
        resolve("Second Promise Resolved after 1 sec.");
    },1000);
});
let task8Promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Task8,promise 3:");
        resolve("Third Promise Resolved after 1 sec.");
    },1000);
})
//async function to handle all concurrent promises using Promise.all
const handleAllConcurrentPromises=async()=>{
    try{
        //wait for all promises to resolve
        const results=await Promise.all([task8Promise1,task8Promise2,task8Promise3]);
        //Log all the resolved values
        console.log(results);

    }catch(error){
        console.log('Error',error);
    }
}
handleAllConcurrentPromises();


//  Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
let prTask9= new Promise((resolve,reject)=>{
    setTimeout(()=>{
           resolve('Task9,Promise 1 resolved.');
    },1000);
});
let pr2Task9= new Promise((resolve,reject)=>{
    setTimeout(()=>{
           resolve('Task9,Promise 2 resolved.');
    },1000);
});
let pr3Task9= new Promise((resolve,reject)=>{
    setTimeout(()=>{
           resolve('Task9,Promise 3 resolved.');
    },1000);
});

//async function to handle all promises using Promises.race()

const handleAllPromises=async()=>{
    try{
        //wait for all promises to resolve
        const results=await Promise.race([prTask9,pr2Task9,pr3Task9]);
        //Log all the resolved values
        console.log(results);

    }catch(error){
        console.log('Error',error);
    }
}
handleAllPromises();