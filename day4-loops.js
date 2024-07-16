//Activity 1:For Loop
//Task1:
function NatNum(num){
    
    
    for(let i=1;i<=num;i++)
    {
        console.log(i);
      
    }
    console.log("Using while loop");
    let j=1;
    while(j<=num){
        console.log(j);
        j++;
    }
   
}
NatNum(10);
console.log('Reversed Numbers from 10 to 1:')
let num=10;
j=num;
while(j>0){
    console.log(j);
    j--;
}
console.log("Multiplication Table:");
function table(n){
    for(let i=1;i<=12;i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}
table(5);
console.log('Sum of n natural numbers.');
function Sum(num){
    let i=1;
    let sum=0;
    while(i<=num){
       sum+=i;
       i++;
    }
    console.log(`Sum of numbers from 1 to ${num} is ${sum}`);
}
Sum(7);

const factorial=(num)=>{
    let fact=1;
    let i=1;
    if(num==0 || num==1)return`Factorial of ${num} is :${fact}`;
    do{
        fact*=i;
        i++;

    }while(i<=num);
    console.log(`Factorial of ${num} is ${fact}`);
}

factorial(6);
factorial(0);
// factorial(6);
console.log("use of continue:")
for (let num = 1; num<=10; num++) {
       if(num===5)continue;
       console.log(num);
    
}
console.log("use of break:")
for (let num = 1; num<=10; num++) {
    if(num===7)break;
    console.log(num);
 
}
console.log("Right-angled triangle star pattern ")
const Pattern1 = (num)=>{
    //outer loop for rows
    for(let i=0;i<num;i++)
    { let pattern='';
        //inner loop for columns
        for(let j=0;j<=i;j++)
        {

            pattern+=('* ');// console.log("automatically adds new line ,so we need to store it in a value first ,like pattern.")
        }
        console.log(pattern);
    }
}
Pattern1(5);

