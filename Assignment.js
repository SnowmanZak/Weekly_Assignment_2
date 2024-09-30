
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

    updateResult(result)
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
    updateResult(result)
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
    updateResult(result)
}


function updateResult(result) {
    document.getElementById('Result').textContent = result;
}
