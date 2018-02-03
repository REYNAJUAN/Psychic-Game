$(document).ready(function(){
    // You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
            
    // 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
    
    // 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).   


    var ties=0;
    var loses=0;
    var wins=0;
    var guessesLeft=2;
    var computerGuess=getcomputerGuess();
    var userGuess="";
    var guesses=[];

    $(document).keyup(function(event){
        userGuess=event.key;
        alert("User guess: " + userGuess);
        alert("Computer guess: " + computerGuess);
    });

    function getcomputerGuess(){
        var guess="";
        // get random value from array of choices storaged in guess //

        return guess;
    }

    // keep all code avobe this line //
});