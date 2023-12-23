var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generating Random Number from 1 to 6 

var randomDiceImage = "dice" + randomNumber1 + ".png"; //Dice1 Change

var randomImageSource = "images/" +randomDiceImage; // Images Change From 1to 6 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2 =Math.floor(Math.random() * 6)+ 1;

var randomDiceImage ="dice" + randomNumber2 + ".png";

var randomImageSource = "images/" +randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Its a Draw";
}