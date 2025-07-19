let countEleaminte = document.getElementById('counter'),
     Plusebtn = document.getElementById('plasbtn'),
     minusbtn = document.getElementById('mibtn');


let counIp = 0;

const updateCounter = (value) =>{
    counIp = counIp + value;
    countEleaminte.textContent= counIp;

    if(counIp>=10) {
        Plusebtn.setAttribute('disabled', true);
    }
    else{
        Plusebtn.removeAttribute('disabled', false);
    }

    if(counIp <= 0){
        minusbtn.setAttribute('disabled', true);
    
    }
    else{
        minusbtn.removeAttribute('disabled', false)
    }
}

Plusebtn.addEventListener("click", ()=>{
    updateCounter(1);
})
minusbtn.addEventListener("click", ()=>{
    updateCounter(-1);
});