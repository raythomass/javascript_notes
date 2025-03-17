console.log("Rock Paper Scissors")

let personOne = "rock"
let personTwo = "rock"

//Eval based on what person one does
switch(personOne) {
    case(personTwo):
        console.log("Tie")
        break;
    case("rock"):
        if(personTwo === "paper") {
            console.log("person two wins")
        } else {
            console.log("person one wins")
        }
        break;
    case("paper"):
        if(personTwo === "scissors") {
            console.log("person two wins")
        } else {
            console.log("person one wins")
        }
        break;
    default:
        if(personTwo === "rock") {
            console.log("person two wins")
        } else {
            console.log("person one wins")
        }
}