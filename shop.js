window.coins += 100; 
console.log(window.coins);
window.purchasedItems = {};
window.initializedShop = false;
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
const coinButton = document.querySelector('#coinDisplay');
const storageButton1 = document.querySelector('#tree-storage');
const storageButton2 = document.querySelector('#rock-storage');
const storageButton3 = document.querySelector('#house-storage');
const storageButton4 = document.querySelector('#flower-storage');
const storageButton5 = document.querySelector('#path-storage');
const treeStorageCount = document.querySelector('#tree-storage .cost');
const rockStorageCount = document.querySelector('#rock-storage .cost');
const houseStorageCount = document.querySelector('#house-storage .cost');
const flowerStorageCount = document.querySelector('#flower-storage .cost');
const pathStorageCount = document.querySelector('#path-storage .cost');
let key1 = 'tree-item';
let key2 = 'rock-item';
let key3 = 'house-item';
let key4 = 'flower-item';
let key5 = 'path-item';
treeStorageCount.textContent = 'x' + (window.purchasedItems[key1] || 0);
rockStorageCount.textContent = 'x' + (window.purchasedItems[key2] || 0);
houseStorageCount.textContent = 'x' + (window.purchasedItems[key3] || 0);
flowerStorageCount.textContent = 'x' + (window.purchasedItems[key4] || 0);
pathStorageCount.textContent = 'x' + (window.purchasedItems[key5] || 0);

import anime from 'animejs/lib/anime.es.js';
coinButton.textContent = window.coins;

// coinButton.addEventListener('click', function(){
//     coinButton.textContent(window.coins);
// })


shopButton1.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        window.purchasedItems[key1] = (window.purchasedItems[key1] || 0) + 1; // Increment the count
        console.log(window.coins);
        console.log(window.purchasedItems);
        coinButton.textContent = window.coins;
        treeStorageCount.textContent = 'x' + window.purchasedItems[key1];

    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton2.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        window.purchasedItems[key2] = (window.purchasedItems[key2] || 0) + 1; // Increment the count
        console.log(window.coins);
        console.log(window.purchasedItems);
        coinButton.textContent = window.coins;
        rockStorageCount.textContent = 'x' + window.purchasedItems[key2];

        
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton3.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        window.purchasedItems[key3] = (window.purchasedItems[key3] || 0) + 1; // Increment the count
        console.log(window.coins);
        console.log(window.purchasedItems);
        coinButton.textContent = window.coins;
        houseStorageCount.textContent = 'x' + window.purchasedItems[key3];

    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton4.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        window.purchasedItems[key4] = (window.purchasedItems[key4] || 0) + 1; // Increment the count
        console.log(window.coins);
        console.log(window.purchasedItems);
        coinButton.textContent = window.coins;
        flowerStorageCount.textContent = 'x' + window.purchasedItems[key4];

    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton5.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
        window.purchasedItems[key5] = (window.purchasedItems[key5] || 0) + 1; // Increment the count
        console.log(window.coins);
        console.log(window.purchasedItems);
        coinButton.textContent = window.coins;
        pathStorageCount.textContent = 'x' + window.purchasedItems[key5];

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
        shopContainer.style.zIndex = "10";
        storageContainer.style.opacity = "0";
        storageContainer.style.zIndex = "-10";
        window.initializedShop = true;
        
        anime ({
            targets: timeFrame,
            opacity: 0,
            easing: 'easeOutQuad',
            duration: 600
         });

   }else { shopContainer.style.opacity = "0";
        shopContainer.style.zIndex = "-10";
        window.initializedShop = true;
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
        storageContainer.style.zIndex = "10";
        window.initializedShop = true;
        shopContainer.style.opacity = "0";
        shopContainer.style.zIndex = "-10";
        anime ({
            targets: timeFrame,
            opacity: 0,
            easing: 'easeOutQuad',
            duration: 600
        });

   }else { 
        storageContainer.style.opacity = "0";
        storageContainer.style.zIndex = "-10";
        window.initializedShop = false;
        anime ({
            targets: timeFrame,
            opacity: 1,
            easing: 'easeOutQuad',
            duration: 600
        });
       
        }
    
    });


storageButton1.addEventListener('click', function(){
    if (window.purchasedItems.hasOwnProperty(key1) && window.purchasedItems[key1] > 0) {
        window.purchasedItems[key1]--; // Decrement the count
        console.log("object created");

        treeStorageCount.textContent = 'x' + window.purchasedItems[key1];

    }
    else {console.log("You do not have sufficient objects");
}
    
});
storageButton2.addEventListener('click', function(){
    if (window.purchasedItems.hasOwnProperty(key2) && window.purchasedItems[key2] > 0) {
        window.purchasedItems[key2]--; // Decrement the count
        console.log("object created");

        rockStorageCount.textContent = 'x' + window.purchasedItems[key2];

    }
    else {console.log("You do not have sufficient objects");
}
    
});
storageButton3.addEventListener('click', function(){
    if (window.purchasedItems.hasOwnProperty(key3) && window.purchasedItems[key3] > 0) {
        window.purchasedItems[key3]--; // Decrement the count
        console.log("object created");

        houseStorageCount.textContent = 'x' + window.purchasedItems[key3];

    }
    else {console.log("You do not have sufficient objects");
}
    
});
storageButton4.addEventListener('click', function(){
    if (window.purchasedItems.hasOwnProperty(key4) && window.purchasedItems[key4] > 0) {
        window.purchasedItems[key4]--; // Decrement the count
        console.log("object created");

        flowerStorageCount.textContent = 'x' + window.purchasedItems[key4];

    }
    else {console.log("You do not have sufficient objects");
}
    
});
storageButton5.addEventListener('click', function(){
    if (window.purchasedItems.hasOwnProperty(key5) && window.purchasedItems[key5] > 0) {
        window.purchasedItems[key5]--; // Decrement the count
        console.log("object created");

        pathStorageCount.textContent = 'x' + window.purchasedItems[key5];

    }
    else {console.log("You do not have sufficient objects");
}
    
});