window.coins += 100; 
console.log(window.coins);
const shopButton1 = document.querySelector('#tree-item');
const shopButton2 = document.querySelector('#rock-item');
const shopButton3 = document.querySelector('#house-item');
const shopButton4 = document.querySelector('#flower-item');
const shopButton5 = document.querySelector('#path-item');




shopButton1.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton2.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton3.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton4.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton5.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
    }
    else {
        alert('You do not have enough coins');
    }
});
shopButton1.addEventListener('click', function(){
    if (window.coins >= 10) {
        window.coins -= 10;
        console.log("purchased");
    }
    else {
        alert('You do not have enough coins');
    }
});