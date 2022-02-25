//all pages
const element = document.querySelector("#logo");
var logoim = document.getElementById("DD");
element.addEventListener("mouseover", event => { //Logo lights up when hovered over
    logoim.src = "logo-selected.png"
});

element.addEventListener("mouseout", event => { //Logo goes back to normal when mouse hovers off
    logoim.src = "logo-crop.png"
});

// Function to generate random number 
function randn(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

//coin flip page
function flip() {
    var tcoin = document.getElementById("coin"); //Coin without popup window
    var pcoin = document.getElementById("corn"); //Coin with popup window
    var coinside = document.getElementById("coinside"); //Side of coin facing up 
    var r = randn(1, 2); //Randomly selects 1 or 2
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

//dice roll page
var diemin = 1; //Minimum value for die rolls; 1 by default; can only change when on custom rolls
var diemax = 6; //Maximum value for die rolls; 6 by default for 6-sided die
var dietype = 6; //Global var for the type of die used; 6-sided die default

function roll() {
    var die = document.getElementById("die"); //Die without popup window
    var dieres = document.getElementById("dieres"); //Die with popup window
    var dieside = document.getElementById("dieside"); //Side of die facing up 
    var r = randn(diemin, diemax); //Randomly selects an int between min to max variables of die rolls
    if (dietype == 1) { //Custom roll
        var mini = parseInt(document.getElementById("minrol").value);
        var maxi = parseInt(document.getElementById("maxrol").value);
        if (mini > maxi) {
            alert("The maximum number has to be bigger than or equal to the minimum number.");
        } else {
            r = randn(mini, maxi);
            dieside.innerHTML = r.toString();
            document.getElementById("rolnum").innerHTML = r.toString();
            document.getElementById("popback").style.display = "flex";
        }
    } else {
        die.src = `${dietype}die-${r}.png`;
        dieres.src = `${dietype}die-${r}.png`;
        dieside.innerHTML = r.toString();
        document.getElementById("popback").style.display = "flex";
    }
}

function rolldone() {
    document.getElementById("popback").style.display = "none";
}


function changedie() {
    var dieselect = document.getElementById("alldice"); //Select menu of dice options
    var changedie = dieselect.selectedIndex; //Index of current die option
    dietype = parseInt(changedie); //Retrieve global index of current die option in int form 
    //alert(changedie);
    if (changedie == "5") { //Custom roll range
        dietype = 1;
        document.getElementById("dieblock").style.display = "none";
        document.getElementById("dierange").style.display = "block";
        document.getElementById("dieres").style.display = "none";
        document.getElementById("rolnum").style.display = "block";
    } 
    else {
        document.getElementById("dieblock").style.display = "block";
        document.getElementById("dierange").style.display = "none";
        document.getElementById("dieres").style.display = "block";
        document.getElementById("rolnum").style.display = "none";
        if (changedie == "0") { //4side die option
            dietype = 4;
            diemax = 4;
            document.getElementById("die").src = "4side-die.png";
        } else if (changedie == "1") { //6side die option
            dietype = 6;
            diemax = 6;
            document.getElementById("die").src = "dice135.png";
        } else if (changedie == "2") { //8side die option
            dietype = 8;
            diemax = 8;
            document.getElementById("die").src = "8side-die.png";
        } else if (changedie == "3") { //12side die option
            dietype = 12;
            diemax = 12;
            document.getElementById("die").src = "12die-12.png";
        } else if (changedie == "4") { //20side die option
            dietype = 20;
            diemax = 20;
            document.getElementById("die").src = "20die-20.png";
        }
    }
}
