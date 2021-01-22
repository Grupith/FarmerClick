let counter = 0;
const button = document.getElementById('buttonClick');
const msg = document.getElementById('alert');
const totalCrops = document.getElementById('crops');
let doubleXP = document.getElementById('buttonDouble');

doubleXP.disabled = true;

function harvest() {
    counter +=1;
    totalCrops.innerHTML = counter;

    if (counter === 5) {
        msg.innerHTML = 'You Unlocked 2x Multiplier!';
        doubleXP.disabled = false;
    } else {
        msg.innerHTML = '';
        
    }
}

function moreXP() {
    counter +=2;
    totalCrops.innerHTML = counter;
}

button.onclick = harvest;
doubleXP.onclick = moreXP;
