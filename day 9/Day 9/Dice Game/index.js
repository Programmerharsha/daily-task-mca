const rollButton = document.getElementById("roll-button");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");

rollButton.addEventListener("click", function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    dice1.src = "images/dice" + randomNumber1 + ".png";
    dice2.src = "images/dice" + randomNumber2 + ".png";

    if (randomNumber1 > randomNumber2) {
        result.textContent = "Player 1 Wins!🚩";
    } else if (randomNumber1 < randomNumber2) {
        result.textContent = "Player 2 Wins!👌";
    } else  {
        result.textContent = "It's a Draw!🤝";
    }
});
