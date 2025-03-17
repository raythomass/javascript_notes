let player1 = "rock"
let player2 = "rock"

let result = 
    player1 === player2
        ? "Tie Game"
        : player1 === "rock" && player2 === "paper"
        ? "player2 wins"
        : player1 === "paper" && player2 === "scissors"
        ? "player 2 wins"
        : player1 === "scissors" && player2 === "rock"
        ? "player2 wins"
        :"player1 wins"
console.log(result)