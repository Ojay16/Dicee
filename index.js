
let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomnumber2 = Math.floor((Math.random() * 6) + 1);

player1();
player2();
tbd();


function player1() {

    if (randomNumber1 == 1) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber1 == 2) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber1 == 3) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
    } else if (randomNumber1 == 4) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber1 == 5) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
    } else {
        document.querySelector("img.img1").setAttribute("src", "./images/dice6.png");
    }
}

function player2() {


    if (randomnumber2 == 1) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice1.png");
    } else if (randomnumber2 == 2) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
    } else if (randomnumber2 == 3) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
    } else if (randomnumber2 == 4) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
    } else if (randomnumber2 == 5) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
    } else {
        document.querySelector("img.img2").setAttribute("src", "./images/dice6.png");
    }
}

function tbd() {
    if (randomNumber1 > randomnumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins 🎉";
    } else if (randomnumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins 🎉";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

}

function refreshPage(){
    window.location.reload();
} 