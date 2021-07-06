'use strict';

// console.log(document.querySelector(".message").innerHTML="Play Game!");

// document.querySelector(".number").textContent=17;
// document.querySelector(".score").textContent=10;

// document.querySelector(".guess").value=4;
let originalNumber=Math.floor(Math.random()*20)+1;
// document.querySelector(".number").textContent=originalNumber;
let score=20;
let highScore=0;
document.querySelector(".check").addEventListener(
    'click',function(){
        
        
        
        const guessNumber=Number(document.querySelector(".guess").value);
        if(!guessNumber){
            document.querySelector(".message").textContent="No Number!";
        }
        else if(guessNumber===originalNumber){
            if(score>highScore){
                highScore=score;
                document.querySelector(".highscore").textContent=score;
            }
            document.querySelector("body").style.backgroundColor="#60b347";
            document.querySelector(".score").textContent=score;
            document.querySelector(".number").textContent=originalNumber;
            document.querySelector(".message").textContent="Correct Number!";
        }
        else if(guessNumber>originalNumber){
            if(score>0){
                score--;
        document.querySelector(".score").textContent=score;
        // console.log(document.querySelector(".score").textContent);
            document.querySelector(".message").textContent="Number is High!";
            }
            else{
                document.querySelector(".score").textContent=0;
                document.querySelector(".message").textContent="You Lost the game!";
            }
            
        }
        else if(guessNumber<originalNumber){
            if(score>0){
                score--;
        document.querySelector(".score").textContent=score;
        // console.log(document.querySelector(".score").textContent);
            document.querySelector(".message").textContent="Number is Low!";
            }
            else{
                document.querySelector(".score").textContent=0;
                document.querySelector(".message").textContent="You Lost the game!";
            }
        }      
    }
)

document.querySelector(".again").addEventListener(
    'click',function(){
        
        score=20;
        originalNumber=Math.floor(Math.random()*20)+1;
        document.querySelector(".score").textContent=score;
        document.querySelector(".number").textContent='?';
        document.querySelector(".guess").value="";
        document.querySelector(".message").textContent="Start the Game!";
        document.querySelector("body").style.backgroundColor="#222";
    }
)