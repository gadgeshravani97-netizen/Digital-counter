let count=0;

const counterValue = document.getElementById('font');
const counterdec = document.getElementById('dec');
const counterres = document.getElementById('res');
const counterinc = document.getElementById('inc');

function updateColor(){
    if(count>0){
        counterValue.style.color="#167802";
    }else if(count<0){
        counterValue.style.color="#782002";
    }else{
        counterValue.style.color="#616261";
    }
}

counterinc.addEventListener("click",() =>{
    count++;
    counterValue.textContent=count;
    updateColor();
})

counterdec.addEventListener("click",() =>{
    count--;
    counterValue.textContent=count;
    updateColor();
})

counterres.addEventListener("click",() =>{
    count=0;
    counterValue.textContent=count;
    updateColor();
})