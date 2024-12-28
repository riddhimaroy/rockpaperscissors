function getCompChoice()
{
    let x = Math.floor(Math.random()*3);

    switch(x)
    {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function getHumChoice()
{
    let y = prompt("Enter rock, paper or scissors", '');
    y = y.toLowerCase();
    return y;
}

//console.log(getHumChoice());

function playRound(h, c)
{
    if(h==c)
    {
        console.log("Computer: " + c);
        console.log("You both got " + h +". No points given");
        console.log(`You : ${humanScore} !! Computer: ${compScore}`);
    }

    else if(h=='rock' && c=='scissors' || h=='scissors' && c=='paper' || h=='paper' && c=='rock')
    {
        console.log("Computer: " + c);
        console.log("You win!!");
        humanScore++;
        console.log(`You : ${humanScore} !! Computer: ${compScore}`);
    }

    else
    {        
        console.log("Computer: " + c);
        console.log("The computer won!!");
        compScore++;
        console.log(`You : ${humanScore} || Computer: ${compScore}`);
    }
}

let humanScore = 0, compScore = 0;

function playGame()
{
    for(let i=0; i<5; i++)
    {
        console.log("Round " + Number(i+1));
        h = getHumChoice();
        c = getCompChoice();

        playRound(h,c);
    }

    if(humanScore>compScore)
    {
        console.log("\nYou have won the game");
    }
    else if(compScore>humanScore)
    {
        console.log("\nThe computer has won the game");
    }
    else
    {
        console.log("\nIt is a tie");
    }
}

playGame();