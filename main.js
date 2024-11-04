const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error, please type rock, paper, or scissors.');
    }
}

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else if (computerChoice === 2) {
        return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'Congrats! Instant Victory!'
    };
    if (userChoice === computerChoice) {
        return 'Tie!';
    };
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer Wins!';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'User Wins!';
    };
    if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'User Wins!';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer Wins!';
    };
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'User Wins!';
    } else if (userChoice === 'scissors' && computerChoice === 'rock'){
        return 'Computer Wins!';
    };
};

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}.`);
    console.log(`The computer chose: ${computerChoice}.`);

    console.log(determineWinner(userChoice, computerChoice));

};

playGame();
