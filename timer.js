let intervalId; // current milliseconds interval

import anime from 'animejs/lib/anime.es.js';
const startButton = document.querySelector('#startButton');
const timerP = document.querySelector('#timerP');
const setButton = document.querySelector('#setButton');
const focusTimeHTML = document.querySelector('#minutesInput');
const progressBar = document.querySelector('#progression-bar');
const progressContainer = document.querySelector('#status-container');
const tip = document.querySelector('#tip');
let timeLeft;
window.coins = 0; 


startButton.addEventListener('click', function(){
   
    var focusTime = Number(focusTimeHTML.value) * 60; 
    if (isNaN(focusTime) || focusTime <= 0) {
        focusTime = 25 * 60;
        //return;
    }
    
    
    if (startButton.textContent == 'start'){
        progressBar.style.width = '0%';
        animateBar(focusTime);
        tip.innerHTML = "current session rewards: " + Math.round(Math.pow(Number(focusTime/60), 1.05)) + " coin(s)";
        startButton.textContent = 'give up';
        timeLeft = focusTime;
        console.log(`timeLeft: ${timeLeft}`); // Log the value of timeLeft
        intervalId = setInterval(timer, 1000);
    } else {
    closeBar(); 
    progressBar.style.width = '0%';
    tip.innerHTML = "you lost out on your reward. try again!";
    startButton.textContent = 'start';

    const minutes = Math.floor((focusTime) / 60);
    const seconds = Math.floor((focusTime) % 60);
    timerP.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
   
    clearInterval(intervalId);
    progressBar.style.width = '0%';
    }
});
setButton.addEventListener('click', function(){
    const focusTime = Number(focusTimeHTML.value);
    if (isNaN(focusTime) || focusTime <= 0) {
        alert('Please enter a valid focus time in minutes');
        return;
    }

    closeBar(); 
    progressBar.style.width = '0%';
    tip.innerHTML = "do your best! you can do it!";
    const minutes = Math.floor((focusTime * 60) / 60);
    const seconds = Math.floor((focusTime * 60) % 60);
    timerP.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
 

    if (startButton.textContent == 'give up'){
        clearInterval(intervalId);
        startButton.textContent = 'start';

    }

});

//INACTIVITY TIMER\\
let timeout = null;

document.addEventListener('mousemove', function() {

    let check = document.getElementById('shop-container');
    let check2 = document.getElementById('storage-container');
    let div = document.getElementById('timer-layout');
    if(!window.initializedShop){
        clearTimeout(timeout);

        // Get the div
        
    
        // Reset the opacity
        div.style.opacity = 1;
    
        // Set a new timeout
        timeout = setTimeout(function() {
            if(!window.initializedShop){
                div.style.opacity = 0.4; 
            }
           
        }, 1000); 
    }else{
       
        div.style.opacity = 0;
    }
   
});


// calculates timer left in minutes and seconds, and outputs text to timerP paragraph element. if time is zero, reset
function timer() {
    timeLeft--;
    console.log(`timeLeft: ${timeLeft}`); // Log the value of timeLeft

    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft % 60);
    timerP.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft <= 0) {
        startButton.textContent = 'start';
       
        clearInterval(intervalId);
        closeBar();
        const focusTime = Number(focusTimeHTML.value);
        if (isNaN(focusTime) || focusTime <= 0) {
            focusTime = 25 * 60;
            //return;
        }
        

        window.coins += Math.pow(focusTime, 1.05);
        window.coins = Math.round(window.coins);
        window.coinButton.textContent = "$" + window.coins;
        tip.innerHTML = "you did it! you earned: " + Math.round(Math.pow(focusTime,1.05)) +" coin(s)!";
        console.log(`current coins: ${window.coins}`);
    }
}



function animateBar(x){
   
    anime({
        targets: progressContainer,
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000
    });
    anime({                 
        targets: progressBar,
        width: '100%',
        easing: 'linear',
        duration: x * 1000  
    });
 
}
function closeBar(){
    
    anime({
        targets: progressContainer,
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 1000
    });
    
    anime({
        targets: progressBar,
        width: "0%",
        easing: 'easeInOutQuad',
        duration: 1000
    });
    progressBar.style.width = '0%';
    
  
}


