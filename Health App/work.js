// let counter = document.querySelector('.counter');

// let count = 1;

// setInterval(()=>{
//     if(count < 75){
//         count++;
//     counter.innerHTML = count;
//     }
    
// },1000)


let counter = document.querySelectorAll('.counter');
let time = 300;

counter.forEach(counter =>{
    let updateCounter= ()=>{
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText;

    let incrment = target/time;
    
    if(count < target){
        counter.innerText= Math.ceil(count+incrment);
        setTimeout(updateCounter, 1)
    }
    else{
        counter.innerText = target;
    };
    
    }

    updateCounter();
})

let healthCondition = document.querySelector('.helth');
setTimeout(()=>{
    healthCondition.innerText =" You are Fit"
}, 5000);



// const heart = document.getElementById('heart');

//   heart.addEventListener('click', () => {
//     heart.classList.remove('heartbeat'); // Remove class to re-trigger animation
//     void heart.offsetWidth; // Trigger reflow
//     heart.classList.add('heartbeat')});