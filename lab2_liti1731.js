var myNumber=Math.round(Math.random()*60)+1;
var x;//finsh in x times
var guess;
var allGuesses="Your numbers were ";//record of numbers
var turns; //limitation of 10 times
var accuracy=0;//x plus together 
var times=0;//times of playing the whole game

while(confirm('Wanna play again?')) {  
    turns=false;
    x=0;
    times=times+1;
    while (turns==false){
        x=x+1;
        
        guess=prompt('Please type a number between 1 and 60.');
          if(61>guess>0){
             if(guess==myNumber){
                alert('Congrats, you did it in '+x+' guesses!');
                allGuesses=allGuesses+guess+" ";
                turns=true;
             }else{
                if(guess>myNumber){
                   alert('Your guess was too high.');
                   allGuesses=allGuesses+guess+" ";
                } else if(guess<myNumber){
                   alert('Your guess was too low.');
                   allGuesses=allGuesses+guess+" ";
                }
                if(x==10) {
                   alert('Sorry, that was your 10 guesses. The correct answer was '+myNumber);
                   turns=true;
                }
             }
          }else{
            alert('Please enter a vaild number.');
          }  
    }

    alert(allGuesses);
    accuracy=accuracy+x;
    alert('The average number of guesses is '+ accuracy/times);
}


