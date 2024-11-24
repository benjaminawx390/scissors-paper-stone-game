//Scissor paper stone game project


//Computer Functions

function computerChoice () {
    const choices=["scissors", "paper" , "stone"];
    const random=Math.floor(Math.random() * choices.length);
    return choices[random]
}


//determining the winner

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

