let total = 0;
let bonus = 1;
let cost = 20;
let auto = 0;
let autoCost = 50;

const balance = document.getElementById("balance");
const clickBtn = document.getElementById("click");
const upBtn = document.getElementById("upgrade");
const autoBtn = document.getElementById("auto");

balance.innerText = total;
upBtn.innerText = "Upgrade (" + cost + ")";
autoBtn.innerText = "Auto (" + autoCost + ")";

clickBtn.onclick = function() {
    total += bonus;
    balance.innerText = total;
}

upBtn.onclick = function() {
    if (total >= cost) {
        total -= cost;
        bonus++;
        cost *= 2;
        upBtn.innerText = "Upgrade (" + cost + ")";
        balance.innerText = total
    }
}

autoBtn.onclick = function() {
    if (total >= autoCost) {
        total -= autoCost;
        auto++;
        autoCost *= 2;
        autoBtn.innerText = "Auto (" + autoCost + ")";
        balance.innerText = total
    }
}

setInterval(function() {
    total += auto;
    balance.innerText = total;
}, 1000);