//all pages
const element = document.querySelector("#logo");
var logoim = document.getElementById("DD");
element.addEventListener("mouseover", event => { //Logo lights up when hovered over
    logoim.src = "logo-selected.png"
});

element.addEventListener("mouseout", event => { //Logo goes back to normal when mouse hovers off
    logoim.src = "logo-crop.png"
});

//coin flip page
function flip() {
    var tcoin = document.getElementById("coin"); //Coin without popup window
    var pcoin = document.getElementById("corn"); //Coin with popup window
    var coinside = document.getElementById("coinside"); //Side of coin facing up 
    var r = (Math.floor(Math.random() * 2)) + 1; //Randomly selects 1 or 2
    if (r == 1) {
        //alert("Heads!");
        tcoin.src = "coin-head.png";
        pcoin.src = "coin-head.png";
        coinside.innerHTML = "heads";
    } else {
        //alert("Tails!");
        tcoin.src = "coin-tail.png";
        pcoin.src = "coin-tail.png";
        coinside.innerHTML = "tails";
    }
    document.getElementById("popback").style.display = "flex";
}

function flipdone() {
    document.getElementById("popback").style.display = "none";
}