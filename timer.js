let intervalId; // current milliseconds interval

import anime from 'animejs/lib/anime.es.js';
const startButton = document.querySelector('#startButton');
const timerP = document.querySelector('#timerP');
const setButton = document.querySelector('#setButton');
const focusTimeHTML = document.querySelector('#minutesInput');
const progressBar = document.querySelector('#progression-bar');
const progressContainer = document.querySelector('#status-container');
let timeLeft;
let coins = 0; 


startButton.addEventListener('click', function(){
   
    const focusTime = Number(focusTimeHTML.value) * 60; 
    if (isNaN(focusTime) || focusTime <= 0) {
        alert('Please enter a valid focus time in minutes');
        return;
    }
    
    animateBar(focusTime);
    if (startButton.textContent == 'Start'){
        
    startButton.textContent = 'Give up';
    timeLeft = focusTime;
    console.log(`timeLeft: ${timeLeft}`); // Log the value of timeLeft
    intervalId = setInterval(timer, 1000);
} else {
    closeBar();
    startButton.textContent = 'Start';
    timerP.textContent = `${focusTimeHTML.value}:00`;
    clearInterval(intervalId);
}
});
setButton.addEventListener('click', function(){
    const focusTime = Number(focusTimeHTML.value);
    if (isNaN(focusTime) || focusTime <= 0) {
        alert('Please enter a valid focus time in minutes');
        return;
    }
    timerP.textContent = `${focusTime}:00`;

    if (startButton.textContent == 'Give up'){
        clearInterval(intervalId);
        startButton.textContent = 'Start Timer';

    }

})


// calculates timer left in minutes and seconds, and outputs text to timerP paragraph element. if time is zero, reset
function timer() {
    timeLeft--;
    console.log(`timeLeft: ${timeLeft}`); // Log the value of timeLeft

    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.floor(timeLeft % 60);
    timerP.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft == 0) {
        startButton.textContent = 'Start Timer';
        clearInterval(intervalId);
        const focusTime = Number(focusTimeHTML.value);
        coins += Math.pow(focusTime, 1.05);
        coins = Math.round(coins);
        console.log(`current coins: ${coins}`);
    }
}

function animateBar(x){
    progressBar.style.width = '0%';
    progressContainer.style.opacity = 0;
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
function closeBar(x){
    
    anime({
        targets: progressContainer,
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 1000
    });
    progressBar.style.width = '0%';
    
  
}


