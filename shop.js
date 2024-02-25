window.coins += 100; 
console.log(window.coins);
window.purchasedItems = {};
const shopButton1 = document.querySelector('#tree-item');
const shopButton2 = document.querySelector('#rock-item');
const shopButton3 = document.querySelector('#house-item');
const shopButton4 = document.querySelector('#flower-item');
const shopButton5 = document.querySelector('#path-item');
const settingsExit  = document.querySelector('#exitSettings');
const settingsButton = document.querySelector('#settingsButton');
const settingsFrame = document.querySelector('#settings-layout');
const timeFrame = document.querySelector('#timer-layout');
const shopMainButton = document.querySelector('#shopButton');
const shopContainer = document.querySelector('#shop-container');
const storageMainButton = document.querySelector('#invButton');
const storageContainer = document.querySelector('#storage-container');

import anime from 'animejs/lib/anime.es.js';

shopButton1.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        console.log(window.coins);
        window.purchasedItems['tree-item'] = (window.purchasedItems['tree-item'] || 0) + 1; // Increment the count
        console.log(window.purchasedItems);
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton2.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        console.log(window.coins);
        window.purchasedItems['rock-item'] = (window.purchasedItems['rock-item'] || 0) + 1; // Increment the count
        console.log(window.purchasedItems);
        
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton3.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        console.log(window.coins);
        window.purchasedItems['house-item'] = (window.purchasedItems['house-item'] || 0) + 1; // Increment the count
        console.log(window.purchasedItems);
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton4.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        console.log(window.coins);
        window.purchasedItems['flower-item'] = (window.purchasedItems['flower-item'] || 0) + 1; // Increment the count
        console.log(window.purchasedItems);
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton5.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        console.log(window.coins);
        window.purchasedItems['path-item'] = (window.purchasedItems['path-item'] || 0) + 1; // Increment the count
        console.log(window.purchasedItems);
    }
    else {
        alert('You do not have enough coins');
    }
});

//SETTINGS
settingsButton.addEventListener('click', function(){
   if(settingsFrame.style.display != "none"){

         settingsFrame.style.display = "none";
         timeFrame.style.display = "flex";

    }else {
        settingsFrame.style.display = "flex";
        timeFrame.style.display = "none";
    }
});
    settingsExit.addEventListener('click', function(){
        settingsFrame.style.display = "none";
        timeFrame.style.display = "flex";
    });
 

 shopMainButton.addEventListener('click', function(){
    if(shopContainer.style.opacity != "1"){
        shopContainer.style.opacity = "1";
        storageContainer.style.opacity = "0";
        
        anime ({
            targets: timeFrame,
            opacity: 0,
            easing: 'easeOutQuad',
            duration: 600
         });

   }else { shopContainer.style.opacity = "0";
        anime ({
            targets: timeFrame,
            opacity: 1,
            easing: 'easeOutQuad',
            duration: 600
        });
       
    }
    
    });
 storageMainButton.addEventListener('click', function(){
    if(storageContainer.style.opacity != "1"){
        storageContainer.style.opacity = "1";
        shopContainer.style.opacity = "0";
        anime ({
            targets: timeFrame,
            opacity: 0,
            easing: 'easeOutQuad',
            duration: 600
        });

   }else { 
        storageContainer.style.opacity = "0";
        anime ({
            targets: timeFrame,
            opacity: 1,
            easing: 'easeOutQuad',
            duration: 600
        });
       
        }
    
    });


 
