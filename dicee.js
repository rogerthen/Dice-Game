var button = document.querySelector("button")

function rollDice() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var dice1 = document.getElementById('img1');
    dice1.setAttribute('src','images/dice'+randomNumber1+'.png');

    var dice2 = document.getElementById('img2');
    dice2.setAttribute('src','images/dice'+randomNumber2+'.png');

    var result = document.querySelector('h1');

    if(randomNumber1>randomNumber2){
        result.innerHTML = document.getElementById('player1').innerHTML+" Wins";
    }else if(randomNumber1 == randomNumber2) {
        result.innerHTML = "it's a Draw!";
    }else{
        result.innerHTML = document.getElementById('player2').innerHTML+" Wins";
    }
}