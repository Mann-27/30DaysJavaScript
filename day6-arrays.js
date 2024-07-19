//DAY 5:ARRAYS 
/* TASK 1:ARRAY CREATION */
console.log('-----Array Creation,Task 1 and Task 2------');
const arr=[1,2,3,4,5];
console.log(`The first ele of array is :${arr[0]} and last ele of array is :${arr[arr.length-1]}`);

console.log('-------Array Methods,Task3,4,5,6-------');
console.log(`Original Array is :${arr}`);
arr.push(6,7,8,9);
console.log(`Updated array after using push is :${arr}`);

arr.pop();
console.log(`Updated array after using pop is :${arr}`);

arr.shift(1);
console.log(`Updated array is shift :${arr}`);

arr.unshift(10);
console.log(`Updated array is unshift :${arr}`);

console.log('----------Array HOF(map,filter,reduce),Task7,8,9----------------');
const arr1=[1,2,3,4,5];
let res=[];
console.log(`Original Array is :${arr1}`);
let newArr=arr1.map((num)=>num*2);
arr1.map((i)=>{
 res.push(i*2);
})
console.log(`Updated array after using map is :${res}`);
console.log(`Updated array after using map (Arrow Function)is :${newArr}`);
console.log(`Original Array is :${arr1}`);
const even=(num)=>{
    return num%2==0;
}
let newArr1=arr1.filter(even);
console.log(` Updated array using normal function is:${newArr1}`);

newArr=arr1.filter((num)=>num%2===0);

console.log(`Updated array after using filter (callback func )is :${newArr1}`);
console.log(`Original Array is :${arr1}`);

newArr=arr1.reduce(function(acc,currVal){
    console.log(`Acc is :${acc} and Current Value is :${currVal}`);
    return acc+=currVal;
},0);
console.log(`Updated Array after using reduce (Sum of all elems in arrays)is :${newArr}`);

console.log('--------Task10,11-----------')
const days=['Sunday','Monday','Tuesday'];
console.log(`Each element in the array,using for loop is :`);
for(let i=0;i<days.length;i++){
    console.log(days[i]);
}
console.log(`Each element in the array,using for each loop is :`);
days.forEach((day) => {
    console.log(day);
});

console.log('---------Multidimensional Array,Task12,13-----------------');
let n=2;
let m=2;
const multiArr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
]
console.log(multiArr);
console.log('Printing 2d array using nested for loop:')
for(let row=0;row<multiArr.length;row++){
    let value='';
    for(let col=0;col<multiArr[row].length;col++){
       
        value+=(multiArr[row][col]+" ");
    }
    console.log(value);
}
console.table(multiArr);
console.log(multiArr[0,2]);
console.log(`Value at 3rd row and 1st col is:${multiArr[3][1]}`);


