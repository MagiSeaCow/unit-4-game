$(document).ready(function()
{
  /* Counters for keeping track of wins and losses as well as the math total
  while game is being played */
  var scoreTotal = 0;
  var playerWins = 0;
  var playerLosses = 0;

  // Generate Random Number between 19-120 that player has to match
  var ranNum = Math.floor(Math.random()*101+19);
  // console.log("Random Number to Guess: " + ranNum);

  /* Generate Random Numbers btwn 1-12 for each of the crystal buttons to be
  used by the player to match ranNum*/
  var amberNum = Math.floor(Math.random()*11+1);
  // console.log("Amber Number: " + amberNum);
  var amethystNum = Math.floor(Math.random()*11+1);
  // console.log("Amethyst Number: " + amethystNum);
  var diamondNum = Math.floor(Math.random()*11+1);
  // console.log("Diamond Number: " + diamondNum);
  var emeraldNum = Math.floor(Math.random()*11+1);
  // console.log("Emerald Number: " + emeraldNum);

  /* Inital values of wins/losses/scorebox to show the player at start of game
  as well as first random number */
  $("#wins").text(playerWins);
  $("#losses").text(playerLosses);
  $("#randomNum").text(ranNum);
  $("#scoreBox").text(scoreTotal);

  // Function to reset game, to be used in youWin/youLose function
  function reset()
  {
    ranNum = Math.floor(Math.random()*101+19); // generate new random number
    // console.log("Random Number to Guess: " + ranNum);
    $("#randomNum").text(ranNum);

    // new random values for the crystals
    amberNum = Math.floor(Math.random()*11+1);
    // console.log("Amber Number: " + amberNum);
    amethystNum = Math.floor(Math.random()*11+1);
    // console.log("Amethyst Number: " + amethystNum);
    diamondNum = Math.floor(Math.random()*11+1);
    // console.log("Diamond Number: " + diamondNum);
    emeraldNum = Math.floor(Math.random()*11+1);
    // console.log("Emerald Number: " + emeraldNum);

    // reset the score box that holds total of crystal values
    scoreTotal = 0;
    $("#scoreBox").text(scoreTotal);
  };

  /* Function that "alerts" user they have won the game and adds 1 point to the win box.
  Game is reset at the same time for new round */
  function youWin()
  {
    alert("You won!");
    playerWins++; 
    $("#wins").text(playerWins);
    reset();
  };

    /* Function that "alerts" user they have lost the game and adds 1 point to the losses box.
  Game is reset at the same time for new round */
  function youLose()
  {
    alert ("You lose!");
    playerLosses++;
    $("#losses").text(playerLosses);
    reset();
  };

  // Stuff that happens when you click on Amber Crystal Button
  $("#amberCrystal").on("click", function()
  {
    scoreTotal = scoreTotal + amberNum; // add value of crystal to score box
    // console.log("New Total = " + scoreTotal);
    $("#scoreBox").text(scoreTotal); // update the new value of score to front-end HTML

    if (scoreTotal === ranNum) // win condition
    {
      youWin();
    }
    else if (scoreTotal > ranNum) // lose condition
    {
      youLose();
    }
  });
  
  // Stuff that happens when you click on Amethyst Crystal Button
  $("#amethystCrystal").on("click", function()
  {
    scoreTotal = scoreTotal + amethystNum; // add value of crystal to score box
    // console.log("New Total = " + scoreTotal);
    $("#scoreBox").text(scoreTotal); // update the new value of score to front-end HTML

    if (scoreTotal === ranNum) // win condition
    {
      youWin();
    }
    else if (scoreTotal > ranNum) // lose condition
    {
      youLose();
    }
  });

  // Stuff that happens when you click on Diamond Crystal Button
  $("#diamondCrystal").on("click", function()
  {
    scoreTotal = scoreTotal + diamondNum; // add value of the crystal to score box
    // console.log("New Total = " + scoreTotal);
    $("#scoreBox").text(scoreTotal); // update the new value of score to front-end HTML

    if (scoreTotal === ranNum) // win condition
    {
      youWin();
    }
    else if (scoreTotal > ranNum) // lose condition
    {
      youLose();
    } 
  });

  // Stuff that happens when you click on Emerald Crystal Button
  $("#emeraldCrystal").on("click", function()
  {
    scoreTotal = scoreTotal + emeraldNum; // add value of the crystal to score box
    // console.log("New Total= " + scoreTotal);
    $("#scoreBox").text(scoreTotal); // update the new valvue of score to front-end HTML

    if (scoreTotal === ranNum) // win condition
    {
      youWin();
    }
    else if (scoreTotal > ranNum) // lose condition
    {
      youLose();
    }
  });
});