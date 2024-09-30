
let wins = 0
let losses = 0
let ties = 0
let userChoice = 'None'


const choices = ['Rock', 'Paper', 'Scissors'];

function computerRandomChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function chooseRock(){
    userChoice = 'Rock';
    computerChoice = computerRandomChoice();
    let result = '';
    if(userChoice === computerChoice){
        result = 'tie';
        ties ++;
    } 
    else if(computerChoice === 'Scissors'){
        result = 'win';
        wins ++;
    }     
    else{
        result = 'lose';
        losses ++;
    }
    updateResult(result, userChoice, computerChoice)
    updateScore()
}

function choosePaper(){
    userChoice = 'Paper';
    computerChoice = computerRandomChoice();
    let result = '';
    if(userChoice === computerChoice){
        result = 'tie';
        ties ++;
    }
    else if(computerChoice === 'Rock'){
        result = 'win';
        wins ++;
    }
    else{
        result = 'lose';
        losses ++;
    }
    updateResult(result, userChoice, computerChoice)
    updateScore()
}

function chooseScissors(){
    userChoice = 'Scissors';
    computerChoice = computerRandomChoice();
    let result = ''
    if(userChoice === computerChoice){
        result = 'tie';
        ties ++;
    }
    else if(computerChoice === 'Paper'){
        result = 'win';
        wins ++;
    }
    else{
        result = 'lose';
        losses ++;
    }
    updateResult(result, userChoice, computerChoice)
    updateScore()
}


function updateResult(result, userChoice, computerChoice) {
    document.getElementById('Result').textContent = result;
    document.getElementById('userChoice').textContent = userChoice;
    document.getElementById('computerChoice').textContent = computerChoice;
}

function updateScore(){
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
}


