/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    w=['Rock','Paper', 'Scissors']
    const randomnum=Math.floor(Math.random()*w.length)
    return w[randomnum]

}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {

  let score
  if(playerChoice == computerChoice ){
    score=0
  }

  else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
    score=1
  }
  else if(playerChoice == 'Scissos' && computerChoice == 'Paper'){
    score=1
  }
  else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
    score=1
  }
  else{
    score=-1
  }
  return score

  
}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    let resultdiv=document.getElementById('result')
    let playerscorediv=document.getElementById('player-score')
    let handsdiv=document.getElementById('hands')

    if (score == -1) {
        playerscorediv.innerText = score
        resultdiv.innerText = 'You lose!'
    }
    else if(score==0){
        playerscorediv.innerText = score
        resultdiv.innerText = 'Its a tie!'
    }
    else{
        playerscorediv.innerText = score
        resultdiv.innerText = 'You Win!'
    }
    handsdiv.innerText= `${playerChoice} vs ${computerChoice}`
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

  d=playerChoice
  const c=getComputerChoice()
  console.log('player choice', d)
  console.log('computer choice', c)
  const score = getResult(d,c)
  const result = showResult(score,d,c)


}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rps = document.querySelectorAll('.rpsButton')
  
  rps.forEach(RPS=>{RPS.onclick=()=> onClickRPS(RPS.value)})
  let endgamediv= document.getElementById('endGameButton')
  endgamediv.onclick=()=>endGame()
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {

    let resultdiv=document.getElementById('result')
    let playerscorediv=document.getElementById('player-score')
    let handsdiv=document.getElementById('hands')
    playerscorediv.innerText = ''
    resultdiv.innerText = ''
    handsdiv.innerText= ''

  
}

playGame()