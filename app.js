const button = document.getElementById('harvestButton');
const total = document.getElementById('counter');
let counter = 0;

// Upgrade Items
let upgradeItemFarmer = document.getElementById('itemFarmer');
let upgradeItemTractor = document.getElementById('itemTractor')
let upgradeItemBarn = document.getElementById('itemBarn');
let upgradeItemFarmhouse = document.getElementById('itemFarmhouse');
let upgradeItemRanch = document.getElementById('itemRanch');

function defaultClick() {
    counter += 1;
    total.innerHTML = counter;

    //Farmer upgrade
    if(counter >= 50) {
        counter +=1;
        upgradeItemFarmer.style.backgroundColor = '#518746';
    }
    //Tractor upgrade
    if(counter >= 200) {
        counter +=3;
        upgradeItemTractor.style.backgroundColor = '#518746';
    }
    //Barn upgrade
    if(counter >= 500) {
        counter +=5;
        upgradeItemBarn.style.backgroundColor = '#518746';
    }
    //Farmhouse upgrade
    if(counter >= 1500) {
        counter +=40;
        upgradeItemFarmhouse.style.backgroundColor = '#518746';
    }
    //Ranch upgrade
    if(counter >= 5000) {
        counter +=50;
        upgradeItemRanch.style.backgroundColor = '#518746';
    }
}
button.onclick = defaultClick;