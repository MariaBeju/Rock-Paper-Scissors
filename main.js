var text=document.querySelector("#message");

let c_s = '';                                                    //computer select
let result = '';

function showRock() {
    
    let random = Math.random() 
        console.log(random)

        if (random >= 0.01 && random <= 1/3) {
            c_s ="rock";
            result = "It's a draw!";                             //Equal game
            text.innerHTML = (`It's a draw! You both choose ${c_s}!`);
        } else if(random > 1/3 && random <= 2/2) {
            c_s ="paper";
            result = "Sorry, the computer won!";                 //You lose
            text.innerHTML = (`Sorry, the computer won! Rock beats ${c_s}!`);
        } else {
            c_s ="scissors";
            result = "Congratulations, you won!";                //You Win
            text.innerHTML = (`Congratulations, you won! Rock beats ${c_s}!`);
        }

}

function showPaper() {
                
    let random = Math.random() 
        console.log(random)

        if (random >= 0.01 && random <= 1/3) {
            c_s = "rock";
            result = "Congratulations, you won!";                 //You Win
            text.innerHTML = (`Congratulations, you won! Paper beats ${c_s}!`);
        } else if(random > 1/3 && random <= 2/2) {
            c_s = "paper";
            result = "It's a draw!";                              //Equal game  
            text.innerHTML = (`It's a draw! You both choose ${c_s}!`);                
        } else {
            c_s = "scissors";
            result = "Sorry, the computer won!";                  //You lose
            text.innerHTML = (`Sorry, the computer won! Paper beats ${c_s}!`);
        }

}

function showScissors() {

                
    let random = Math.random() 
        console.log(random)

        if (random >= 0.01 && random <= 1/3) {
            c_s = "rock";
            result = "Sorry, the computer won!";                   //You lose
            text.innerHTML = (`Sorry, the computer won! Scissors beats ${c_s}!`);
        } else if(random > 1/3 && random <= 2/2) {
            c_s = "paper";
            result = "Congratulations, you won!";                  //You Win
            text.innerHTML = (`Congratulations, you won! Scissors beats ${c_s}!`);
        } else {
            c_s = "scissors";
            result = "It's a draw!";                               //Equal game
            text.innerHTML = (`It's a draw! You both choose ${c_s}!`);
        }

}