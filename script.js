'use strict'

alert('lets code!');




let count= 0;
let countEl=document.getElementById('count-el')
let saveEl=document.getElementById('save-btn')
let paraEl= document.getElementById('save-el')

document.getElementById('count-el').innerText=0;

function increment(){
    count +=1;
    countEl.innerText=count;
    console.log(count);
    
}


function save(){
    let countStr = count + " - "
    paraEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count);
}
/*------*/





/*let message="you have three new messages"
console.log(message)*/