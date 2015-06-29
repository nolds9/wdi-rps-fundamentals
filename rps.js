  function getInput() {
      console.log("Wanna play a game? Choose either 'rock', 'paper', or 'scissors'.")
      return prompt();}

  function randomPlay() {
      var randomNumber = Math.random();
      if (randomNumber < 0.33) {
          return "rock";}
       else if (randomNumber < 0.66) {
          return "paper";}
       else {
          return "scissors";}}

  function getPlayerMove(move) {
      return move || getInput();}

  function getComputerMove(move) {
       return move || randomPlay();}

  function getWinner(playerMove,computerMove) {
      var winner;
      if (playerMove === computerMove) {
          return 'tie';}
      else if (playerMove === 'rock') {
          if(computerMove === 'scissors') {
              return 'player';}
          else {
              return 'computer';}}
      else if (playerMove === 'paper') {
          if(computerMove === 'rock') {
              return 'player';}
          else {
              return 'computer';}}
      else if (playerMove === 'scissors') {
          if(computerMove === 'paper') {
              return 'player';}
          else {
              return 'computer';}}}



  function playToFive() {
      console.log("Let's play Rock, Paper, Scissors");
      var playerWins = 0;
      var computerWins = 0;

  function calcAdvantage() {
      if (playerWins > computerWins) {
          return 'challenger';}
      else if (computerWins > playerWins) {
          return 'master';}
      else {
          return 'again'}}

      while (playerWins < 5 && computerWins < 5) {
          var computerMove = getComputerMove();
          var playerMove = getPlayerMove();
          var winner = getWinner(playerMove,computerMove);

          if (winner === 'player') {
              playerWins += 1;}
          else if (winner === 'computer') {
              computerWins += 1;}
          else {console.log('Shucks! It is a tie, try again.')}

          var advantage = calcAdvantage();

      console.log('You cast a ' + playerMove + ' while the computer chose ' + computerMove);
      console.log('The score is now ' + playerWins + ' to ' + computerWins + ' in favor of ' + advantage);}

      console.log('Oh, looks like ' + advantage + ' won...play again!');

      return [playerWins, computerWins];}

  playToFive();
