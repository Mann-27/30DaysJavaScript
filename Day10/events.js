const handleEvents=()=>{

    const btn=document.querySelector('.changeText');
    const p=document.querySelector('.para');
    btn.addEventListener('click',()=>{
        p.textContent=" Para Text changed ";
        console.log(p);
    })}

    const img=document.querySelector('.img');
    //const imgbtn=document.querySelector('.imgbtn');
    const toggleVisibility=()=>{
        img.style.opacity==='0'?img.style.opacity='1':img.style.opacity='0';// to change visibility ,particularly for images,we use style.opacity
        
    }
    img.addEventListener('dblclick',toggleVisibility);
handleEvents();

//mouseover and mouseout
const mouseEvents=()=>{
    const div=document.querySelector('.changeBgColor');
     const mouseOver=()=>{
        div.style.backgroundColor='blue';
     }
     div.addEventListener('mouseover',mouseOver);
     const mouseOut=()=>{
        div.style.backgroundColor='';
     }
     div.addEventListener('mouseout',mouseOut);
     }
     mouseEvents();

//keyboard events
const keyboardEvents=()=>{
    const keydown=document.querySelector('#keydown');
    const keyup=document.querySelector('#keyup');
    const pText=document.querySelector('.currentText');
      keydown.addEventListener('keydown',(e)=>{
       
          
           e.key===" "?"space":console.log(`Key pressed is :${e.key}`)
        
      })
      const changeTextPara=(e)=>{
         pText.textContent=e.target.value;
      }
      keyup.addEventListener('keyup',changeTextPara);
}
keyboardEvents();




// task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();

const formData =  new FormData(e.target);
const data= Object.fromEntries(formData.entries());

console.log(data);
})

// task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

document.getElementById('selectedVal').addEventListener('change', function(){
    const selectedValue = this.value;
    document.querySelector('.currentValue').textContent = `Selected Value: ${selectedValue}`;
})


//task9 event delegation
const eventDelegation=()=>{
    const li=document.querySelector('.list');
    li.addEventListener('click',(e)=>{
        if(e.target.tagName==='LI'){
            console.log(e.target.textContent);
        }
    })

}
eventDelegation();

//task10
const addItemBtn = document.getElementById('addItemBtn');
const days=document.querySelector('.days');
function addNewLi(){
    
    const li=document.createElement('li');
    li.textContent=`Item ${days.children.length +1}`;
    days.appendChild(li);
}

days.addEventListener('click',(e)=>{

if(e.target.tagName==='LI'){
    console.log(e.target.textContent);
}
})
addItemBtn.addEventListener('click',addNewLi);
