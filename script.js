let total = 10000;
let bonus = 1;
let cost = 20;
let auto = 0;
let autoCost = 30;
let level = 1;
let levelCost = 100;

const balance = document.getElementById("balance");
const clickBtn = document.getElementById("click");
const upBtn = document.getElementById("upgrade");
const autoBtn = document.getElementById("auto");
const levelBtn = document.getElementById("level");
const levelImage = document.getElementById("image");

balance.innerText = total + " ( level " + level + ")";;
upBtn.innerText = "Upgrade (" + cost + ")";
autoBtn.innerText = "Auto (" + autoCost + ")";

clickBtn.onclick = function() {
    total += bonus ;
    balance.innerText = total + " ( level " + level + ")";
}

upBtn.onclick = function() {
    if (total >= cost) {
        total -= cost;
        bonus++;
        cost *= 2;
        upBtn.innerText = "Upgrade (" + cost + ")";
        balance.innerText = total + " ( level " + level + ")";
    }else{
        alert("Not enough money for upgrade!");
    }
}

autoBtn.onclick = function() {
    if (total >= autoCost) {
        total -= autoCost;
        auto++;
        autoCost *= 2;
        autoBtn.innerText = "Auto (" + autoCost + ")";
        balance.innerText = total + " ( level " + level + ")";
    }else{
        alert("Not enough money for auto clicker!");
    }
}
levelBtn.addEventListener("click", function() {
    if (total >= levelCost) {
        total -= levelCost;
        level++;
        levelCost *= 2;
        levelBtn.innerText = "Level Up (" + levelCost + ")";
        balance.innerText = total + " ( level " + level + ")";
        levelImage.src = level + ".png";
        if (level === 3 ) {
            setTimeout(function() {  
            alert("Congratulations! You won this game!");
            },500)

        }
        else if (level >= 3) {
            levelImage.src =   "3.png"
        }
    } else {
        alert("Not enough money to level up!");
    }
});

setInterval(function() {
    total += auto;
    balance.innerText = total + " ( level " + level + ")";
}, 1000);   