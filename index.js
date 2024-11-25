//Scissor paper stone game project


//Computer Functions

function computerChoice () {
    const choices=["scissors", "paper" , "stone"];
    const random=Math.floor(Math.random() * choices.length);
    return choices[random]
}


//determining the winner with logical condition

function determineWinner(user , computer){
    if(user===computer){
        console.log(
            "This round is a tie!"
        );
    }else if (user ==="scissors" && computer==="paper" || user ==="paper"  && computer ==="stone" || user ==="stone" && computer==="scissors"){
        console.log(
            "You win !"
        );
    }
    else{
        console.log(
            "You lose!"
        );
    }
}

//The actual game function

function mainGame(){
    let user = prompt("Scissors paper or stone?");
    user = user.toLowerCase(); //All inputs to be changed to small caps

    if (user !== "scissors" && user !== "paper" && user !== "stone"){
        console.log("Please enter a valid input again between scissor, paper and stone.");
    }
    const computer = computerChoice(); 

    //Showing choices
    console.log(`You chose ${user}`);
    console.log(`The computer chose ${computer}`);

    //Using the determine winner function

    const result = determineWinner(user,computer);
    console.log(result);
}

mainGame();