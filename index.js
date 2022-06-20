const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const computerChoiceDisplay = document.getElementById("computer-choice")
let startButton = document.getElementById("start")
let computerChoice
let userChoice
let result
let randomNumber

const possibleChoices = document.querySelectorAll("li>button")

possibleChoices.forEach(choice => {
    choice.addEventListener("click",(e) => {
       userChoice = e.target.id
       userChoiceDisplay.innerHTML = userChoice
       computerChoiceDisplay.innerHTML=""
       resultDisplay.innerHTML=""
    })
})

startButton.addEventListener("click",() => {
    randomNumber = Math.floor(Math.random()*3)+1
    switch(randomNumber){
        case 1:
            computerChoice = "Rock"
            break
        case 2:
            computerChoice = "Paper"
            break
        case 3:
            computerChoice = "Scissors"
            break
    }
    computerChoiceDisplay.innerHTML = computerChoice
    displayResult()
})

function displayResult(){  
    if(computerChoice === "Rock" && userChoice === "Paper")
        result="You win !!"
    if(computerChoice === "Rock" && userChoice === "Scissors")
        result="You lose !!"
    if(computerChoice === "Paper" && userChoice === "Rock")
        result="You lose !!"
    if(computerChoice === "Paper" && userChoice === "Scissors")
        result="You win !!"
    if(computerChoice === "Scissors" && userChoice === "Paper")
        result="You lose !!"
    if(computerChoice === "Scissors" && userChoice === "Rock")
        result="You win !!"
    if(computerChoice === "Rock" && userChoice === "Rock")
        result="It's a draw !!"
    if(computerChoice === "Paper" && userChoice === "Paper")
        result="It's a draw !!"
    if(computerChoice === "Scissors" && userChoice === "Scissors")
        result="It's a draw !!"
    if(userChoice === undefined)
        {result="Please Select Your Choice !"
         alert("Invalid! Please Select Your Choice !")}
    
    resultDisplay.innerHTML = result
}
