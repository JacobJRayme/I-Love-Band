var buttonOptions = ["horn","trumpet","tuba", "trombone"];
var gamePattern = [];
var playerSelection = [];
var game_round = 1;
var game_started = false;
var player_turn = false;
var index = 0;
var i = 0;                  //  set your counter to 1, for showing the sequence.

function nextSequence(){
  randomNumber = Math.floor(Math.random()*4);
  gamePattern.push(buttonOptions[randomNumber]);
  showSequence();
}

function playInstrument(instrumentName){
  instrument = $("." + instrumentName);
  $(instrument).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}



function showSequence() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    playInstrument(instrumentName=gamePattern[i]);   //  your code here
    i++;                    //  increment the counter
    if (i < gamePattern.length) {           //  if the counter < 10, call the loop function
      showSequence();             //  ..  again which will trigger another
    }
    else{
      player_turn = true;
    }                       //  ..  setTimeout()
  }, 1000)
}
function gameOver(){
  $("h1").text("Game Over LOL");
  $(".intro").text("You got to round " + window.game_round + ". Press any key to play again.");
  game_started = false;
}

$(document).keypress(function(event){
  if (! game_started){
  window.game_round = 1;
  window.gamePattern = [];
  window.playerSelection = [];
  game_started = true;
  $("h1").text("Round " + game_round);
  $(".intro").text("Good luck lmaoo");
  nextSequence();
  player_turn = true;
  }
});

$("button").click(function(event){
  if (player_turn){
    instrument = event.currentTarget.getAttribute("class");
    playerSelection.push(instrument);
    if (playerSelection[index] == gamePattern[index]){
      index ++;
      console.log("Correct");
      if (playerSelection.length == gamePattern.length)
      {
        playerSelection = [];
        player_turn = false;
        index = 0;
        window.i = 0;
        window.game_round ++;
        $("h1").text("Round " + window.game_round);
        nextSequence();
      }
    }
    else{
      console.log("Incorrect");
      event.currentTarget.className += " wrong";
      setTimeout(function(){event.currentTarget.className = instrument},1000)
      gameOver();
    }
}});
