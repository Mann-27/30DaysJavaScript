// DAY-9..DOM 
console.log('---------Task1 (Change Text Content by Id ----------');
const h1Id=document.getElementById('changeText');
h1Id.textContent="Day-9,Heading Changed By Id.";
console.log('---------Task2 (Change Text Content by class ----------');
const h2=document.querySelector('.changeBgColor');
h2.style.backgroundColor="blue";
h2.style.color="white";
console.log('---------Feature 1---------');
const changeTextContent=()=>{
    const hId=document.getElementById('changeTextFeature');
    hId.textContent="Day-9,Heading Changed By Id using Feature Script.";
}
changeTextContent();
console.log('--------------Task 3 (New Element Creation)-------------');

const newElementCreation=()=>{
    const newDivEle=document.createElement("div");
    newDivEle.className="changeBorderColor";
    newDivEle.textContent="New Div Created by createElement.";
    newDivEle.style.border="2px solid red";
    newDivEle.style.margin="1rem";
    document.body.appendChild(newDivEle);

}
newElementCreation();
console.log('--------------Task-4 Create new li ele and add it to existing ul.');
const createAndAddLi=(newLi)=>{
    const ul=document.querySelector('.lang');
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(newLi));
     
    ul.appendChild(li);
}
createAndAddLi('C');//added li c lang to list.
createAndAddLi('Python');//added li c lang to list.

console.log('-------------Task-5,feature-3----------------------');
const removeElement=()=>{
    const ele=document.querySelector('.removeEle');

    ele.remove();
  


}
console.log('--------------Task-6,Remove last child of specific element.----------');
const li=document.querySelector('.lang');
li.lastChild.remove();//removes last li element 

const remove=document.querySelector('#remove');
remove.addEventListener('click',function(e){
removeElement();
})
console.log('-----------Task-7,8,feature script -4----------');
const modifyAttributes=()=>{
    const img=document.querySelector('#img');
    img.setAttribute("src","https://images.unsplash.com/photo-1721504483802-6503a4ba6eeb?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
   
    img.classList.add('img');
    const div=document.querySelector('#changePara');
    div.classList.add('changePara');//added css class 
    div.classList.add('changeBorderColor');//added css class 
    
    div.classList.remove('changeBorderColor');//removed css class.


};
modifyAttributes();
console.log('--------------------Task 9,10,feature script 5----------');
const eventHandling=()=>{
   
    const p=document.querySelector('.onButtonClick');
    const clickEvent=document.querySelector('#btn');
    clickEvent.addEventListener('click',function(){
        p.textContent="Div Text Content Changed.";
    })
    
    const mouseOver=document.querySelector('.changeBorderColor');
    mouseOver.addEventListener('mouseover',()=>{
        mouseOver.style.border="2px solid black";
        mouseOver.textContent="Border Changed To Black.";

        
    })
    
}
eventHandling();
