let decision;
let readScoreFirstTime = localStorage.getItem('score')
let score = readScoreFirstTime ? JSON.parse(readScoreFirstTime) : {
    win : 0,
    lost : 0,
    tie : 0,
  }
updateScore(score)
// console.log(readScoreFirstTime)
// console.log(score)



// Function to Generate Computer choice
function generateComputerChoice () {
  let randomNum = Math.round(Math.random() * 3);
  let computerChoice;
  // Defining computerChoices Based on randomNumber
  if (randomNum < 1){
    computerChoice = 'bat';
  } else if (randomNum >= 1) {
    computerChoice = 'ball';
  } else if (randomNum >= 2){
    computerChoice = 'stump';
  }
  // console.log(randomNum)
  return computerChoice
}

// Function to compare the userChoice and computerChoice
function compareValues(userChoice, computerChoice) {
  if (userChoice===computerChoice){
            score.tie +=1
            decision = 'TIE'
  } else if (userChoice === 'bat' && computerChoice ==='ball' || 
            userChoice === 'ball' && computerChoice ==='stump' || 
            userChoice === 'stump' && computerChoice ==='bat'){
            score.win = score.win+1
            decision = 'You Won'
  } else if (userChoice === 'bat' && computerChoice ==='stump' || 
            userChoice === 'ball' && computerChoice ==='bat' || 
            userChoice === 'stump' && computerChoice ==='ball'){
            score.lost = score.lost+1
            decision = 'You Lost'
  }
  // console.log(`userChoice : ${userChoice}, computerChoice : ${computerChoice}`)
}

// Function to Evaluate Results
function showResults (userChoice) {
  let computerChoice = generateComputerChoice()
  compareValues(userChoice, computerChoice)
  localStorage.setItem('score', JSON.stringify(score))
  showChoices(userChoice, computerChoice, decision)
  updateScore(score)
}

function updateScore(score){
  document.querySelector('#win').innerText = `win : ${score.win}`
  document.querySelector('#lost').innerText = `lost : ${score.lost}`
  document.querySelector('#tie').innerText = `tie : ${score.tie}`
}

function resetScore () {
  localStorage.clear('score')
  score =  {
    win : 0,
    lost : 0,
    tie : 0,
    }
  showChoices()
  updateScore(score)
}

function showChoices(usrchoice, compchoice, decision) {
  document.querySelector('#usrchoice').innerText = usrchoice ? `You Choose : ${usrchoice}` : ''
  document.querySelector('#compchoice').innerText = compchoice ? `Computer Choose: ${compchoice}` : ''
  document.querySelector('#result').innerText = decision ? `Result: ${decision}` : ''
}
