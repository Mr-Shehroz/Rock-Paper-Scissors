let userScore = 0
let compScore = 0
let img = document.querySelectorAll(".img")
let msg = document.querySelector(".msg")
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")




img.forEach((img) => {
    img.addEventListener("click" , () => {
        let userChoice = img.getAttribute("id")
        playGame(userChoice)
    })
})







let compChoice = () => {
    let options = ["rock" , "paper" , "scissors"]
    let random = Math.floor(Math.random() * 3)
    return options[random]
}




let playGame = (userChoice) => {
    let computerChoice = compChoice()
    if (userChoice === computerChoice) {
        tie(computerChoice,userChoice)
    }
    else {
        let userWin = false
        if (userChoice === "rock") {
            userWin = computerChoice === "scissors" ? true : false
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "rock" ? true : false
        }
        else if (userChoice === "scissors") {
            userWin = computerChoice === "paper" ? true : false
        }
        showWinner(userWin,userChoice,computerChoice)
    }
    }


const tie = (computerChoice,userChoice) => {
    msg.innerText = `Game was draw, you choose ${userChoice} and computer also chooses ${computerChoice}`
    msg.style.backgroundColor = "purple"
}




const showWinner = (userWin,userChoice,computerChoice) => {
    if (userWin) {
        msg.innerText = `You Win, your ${userChoice} beats computer's ${computerChoice}`
        userScore++
        p1.innerText = userScore
        msg.style.backgroundColor = "green"
    }
    else {
        console.log("lose");
        msg.innerText = `You lose, computer's ${computerChoice} beats your ${userChoice}`
        compScore++
        p2.innerText = compScore
        msg.style.backgroundColor = "red"
    }
}