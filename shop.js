window.coins += 100; 
console.log(window.coins);
window.purchasedItems = {};
const shopButton1 = document.querySelector('#tree-item');
const shopButton2 = document.querySelector('#rock-item');
const shopButton3 = document.querySelector('#house-item');
const shopButton4 = document.querySelector('#flower-item');
const shopButton5 = document.querySelector('#path-item');


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
