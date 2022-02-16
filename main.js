const flip_button = document.getElementById("cloin");

flip_button.addEventListener("click", flip());

function flip() {
    var n = 2;
    var r = (Math.floor(Math.random() * n)) + 1; //Randomly selects integer between 1 and n
    if (r == 1) {
        alert("Heads!");
    } else {
        alert("Tails!");
    }
}