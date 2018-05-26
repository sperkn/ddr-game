window.onload = function() {
  //*until noted otherwise, the following code below is for general use.*
  

//***until noted otherwise, the following code below is for Button functionality on main menu***
  
  //general function for all buttons so the "blur" doesnt show around border when clicked
  $('.btn').mouseup(function() {this.blur();});
  $('.non-hover-btn').mouseup(function() {this.blur();});

  //general function for initializing the difficulty buttons since they will be used multiple times
  let difficultyButtons = $('.diff-btn');
  let difficultyLevelIds = ['#easy', '#medium', '#hard', '#expert'];

  //general function for initializing the player buttons since they will be used multiple times
  let playerIds = ['#one-player', '#two-player'];
  
  //function for toggling the instructions when the instructions button is clicked
  $('#instructions-btn').on('click', function(event) {
    $(this).toggleClass('active');
    if ($('#instructions-btn').hasClass('active')) {
      document.getElementById("instructions-display").style.display = "flex";
    } else {
      document.getElementById("instructions-display").style.display = "none";
    }
    // $('#instructions').toggleClass('instructions-display instructions-popup');
  });

  //functions for toggling the player buttons when they are clicked and enabling/disabling difficulty buttons
  //one-player button functionality
  $('#one-player').on('click', function(event) {
    $(this).toggleClass('active');
    if  ($('#two-player').hasClass('active')){
      $('#two-player').toggleClass('active');
    }
    if ($('#expert').hasClass('exp-non-hover')) {
      $('#expert').toggleClass('exp-non-hover btn');
    }

    if ($('#one-player').hasClass('active') && $(difficultyLevelIds[1]).hasClass('non-hover-btn')) {
      for(i=0;i<difficultyLevelIds.length;i++) {
        $(difficultyLevelIds[i]).toggleClass('non-hover-btn btn');
        difficultyButtons[i].disabled = false;
      }
    } else if ($('#one-player').hasClass('active')) {
        for(i=0;i<difficultyLevelIds.length;i++){
        difficultyButtons[i].disabled = false;
        }
      } else if ($(difficultyLevelIds[1]).hasClass('btn')) {
        for(i=0;i<difficultyLevelIds.length;i++){
          $(difficultyLevelIds[i]).toggleClass('btn non-hover-btn');
          difficultyButtons[i].disabled = true;
          if ($(difficultyLevelIds[i]).hasClass('active')) {
          $(difficultyLevelIds[i]).toggleClass('active');
          }
        }
      } else {
          for(i=0;i<difficultyLevelIds.length;i++){
            difficultyButtons[i].disabled = true;
            if ($(difficultyLevelIds[i]).hasClass('active')) {
            $(difficultyLevelIds[i]).toggleClass('active');
            }
          }
        }
  });

  //two-player button functionality
  $('#two-player').on('click', function(event) {
    $(this).toggleClass('active');
    $('#expert').prop('disabled', true);

    if($('#one-player').hasClass('active')){
      $('#one-player').toggleClass('active');
    }

    if ($('#expert').hasClass('active')) {
      $('#expert').toggleClass('active');
    } 

    if ($('#expert').hasClass('btn')) {
      $('#expert').toggleClass('btn exp-non-hover');
    } 
    
    if ($('#expert').hasClass('non-hover-btn')) {
      $('#expert').toggleClass('non-hover-btn exp-non-hover');
    }

    if ($('#two-player').hasClass('active') && $(difficultyLevelIds[1]).hasClass('non-hover-btn')) {
      $('#expert').disabled = true;
      for(i=0;i<difficultyLevelIds.length-1;i++) {
        $(difficultyLevelIds[i]).toggleClass('non-hover-btn btn');
        difficultyButtons[i].disabled = false;
      }
    } else if ($('#two-player').hasClass('active')) {
        $('#expert').disabled = true;
        difficultyButtons.disabled = false;
        for(i=0;i<difficultyLevelIds.length-1;i++){
        difficultyButtons[i].disabled = false;
        }
      } else if ($(difficultyLevelIds[1]).hasClass('btn')) {
        $('#expert').disabled = true;
        for(i=0;i<difficultyLevelIds.length-1;i++){
          $(difficultyLevelIds[i]).toggleClass('btn non-hover-btn');
          difficultyButtons[i].disabled = true;
          if ($(difficultyLevelIds[i]).hasClass('active')) {
          $(difficultyLevelIds[i]).toggleClass('active');
          }
        }
      } else {
          $('#expert').disabled = true;
          for(i=0;i<difficultyLevelIds.length-1;i++){
            difficultyButtons[i].disabled = true;
            if ($(difficultyLevelIds[i]).hasClass('active')) {
              $(difficultyLevelIds[i]).toggleClass('active');
            }
          }
        }
  });

  // functions for toggling the difficulty buttons when they are clicked and the corresponding songs
  $('#easy').on('click', function(event) {
    $(this).toggleClass('active');
    if($('#easy').hasClass('active')) {
      $('#red-hot').prop('disabled', false);
      $('#red-hot').toggleClass('non-hover-btn btn-song');
      // $('#red-hot').addClass('active');
      $('#nirvana').prop('disabled', false);
      $('#nirvana').toggleClass('non-hover-btn btn-song');
      // $('#nirvana').addClass('active');
    } else {
      $('#red-hot').prop('disabled', true);
      $('#red-hot').toggleClass('btn-song non-hover-btn');
      // $('#red-hot').removeClass('active');
      $('#nirvana').prop('disabled', true);
      $('#nirvana').toggleClass('btn-song non-hover-btn');
      // $('#nirvana').removeClass('active');
    }
    if ($('#medium').hasClass('active')) {
      $('#medium').removeClass('active');
    }
    if ($('#hard').hasClass('active')) {
      $('#hard').removeClass('active');
    }
    if ($('#expert').hasClass('active')) {
      $('#expert').removeClass('active');
    }
  });

  $('#medium').on('click', function(event) {
    $(this).toggleClass('active');
    if($('#medium').hasClass('active')) {
      // $('#dre').addClass('active');
      $('#dre').toggleClass('non-hover-btn btn-song');
      // $('#dre').disabled = false;
      $('#dre').prop('disabled', false);
      $('#blink').prop('disabled', true);
      $('#sweet-dreams').prop('disabled', true);
      $('#red-hot').prop('disabled', true);
      $('#nirvana').prop('disabled', true);
    } else {
      $('#dre').toggleClass('btn-song non-hover-btn');
      $('#dre').prop('disabled', true);
      $('#blink').prop('disabled', true);
      $('#sweet-dreams').prop('disabled', true);
      $('#red-hot').prop('disabled', true);
      $('#nirvana').prop('disabled', true);
    }
    if ($('#easy').hasClass('active')) {
      $('#easy').removeClass('active');
    }
    if ($('#hard').hasClass('active')) {
      $('#hard').removeClass('active');
    }
    if ($('#expert').hasClass('active')) {
      $('#expert').removeClass('active');
    }
  });

  $('#hard').on('click', function(event) {
    $(this).toggleClass('active');
    if($('#hard').hasClass('active')) {
      $('#blink').toggleClass('non-hover-btn btn-song');
      $('#blink').prop('disabled', false);
      $('#sweet-dreams').toggleClass('non-hover-btn btn-song');
      $('#sweet-dreams').prop('disabled', false);

      $('#dre').prop('disabled', true);
      $('#red-hot').prop('disabled', true);
      $('#nirvana').prop('disabled', true);
    } else {
      $('#blink').toggleClass('non-hover-btn btn-song');
      $('#blink').prop('disabled', true);
      $('#sweet-dreams').toggleClass('non-hover-btn btn-song');
      $('#sweet-dreams').prop('disabled', true);

      $('#dre').prop('disabled', true);
      $('#red-hot').prop('disabled', true);
      $('#nirvana').prop('disabled', true);
    }
    if ($('#easy').hasClass('active')) {
      $('#easy').removeClass('active');
    }
    if ($('#medium').hasClass('active')) {
      $('#medium').removeClass('active');
    }
    if ($('#expert').hasClass('active')) {
      $('#expert').removeClass('active');
    }
  });

  $('#expert').on('click', function(event) {
    $(this).toggleClass('active');
    if($('#expert').hasClass('active')) {
      $('#blink').toggleClass('non-hover-btn btn-song');
      $('#blink').prop('disabled', false);
      $('#sweet-dreams').toggleClass('non-hover-btn btn-song');
      $('#sweet-dreams').prop('disabled', false);
    } else {
      $('#blink').toggleClass('non-hover-btn btn-song');
      $('#blink').prop('disabled', true);
      $('#sweet-dreams').toggleClass('non-hover-btn btn-song');
      $('#sweet-dreams').prop('disabled', true);
    }
    if ($('#easy').hasClass('active')) {
      $('#easy').removeClass('active');
    }
    if ($('#medium').hasClass('active')) {
      $('#medium').removeClass('active');
    }
    if ($('#hard').hasClass('active')) {
      $('#hard').removeClass('active');
    }
  });

  //functions for toggling the song buttons when they are clicked
  let userSong = document.querySelector('audio');

  $('#nirvana').on('click', function(event) {
    $(this).toggleClass("active");
    if ($('#nirvana').hasClass('active')) {
      $('source').attr('src', '../music/heartshapedbox.mp3');
      userSong.load();
      $('#start').toggleClass('non-hover-btn start-btn');
      $('#start').addClass('active');
      $('#start').prop('disabled', false);
    } else {
      $('$start').toggleClass('start-btn non-hover-btn');
      $('#start').removeClass('active');
      $('#start').prop('disabled', true);
    }

    if ($('#red-hot').hasClass('active')) {
      $('#red-hot').toggleClass('active');
    }
    if ($('#dre').hasClass('active')) {
      $('#dre').toggleClass('active');
    }
    if ($('#blink').hasClass('active')) {
      $('#blink').toggleClass('active');
    }
    if ($('#sweet-dreams').hasClass('active')) {
      $('#sweet-dreams').toggleClass('active');
    }
  });

  $('#red-hot').on('click', function(event) {
    $(this).toggleClass("active");
    if ($('#red-hot').hasClass('active')) {
      $('source').attr('src', '../music/heyredhot.m4a');
      userSong.load();
      $('#start').toggleClass('non-hover-btn start-btn');
      $('#start').addClass('active');
      $('#start').prop('disabled', false);
    } else {
      $('$start').toggleClass('start-btn non-hover-btn');
      $('#start').removeClass('active');
      $('#start').prop('disabled', true);
    }

    if ($('#nirvana').hasClass('active')) {
      $('#nirvana').toggleClass('active');
    }
    if ($('#dre').hasClass('active')) {
      $('#dre').toggleClass('active');
    }
    if ($('#blink').hasClass('active')) {
      $('#blink').toggleClass('active');
    }
    if ($('#sweet-dreams').hasClass('active')) {
      $('#sweet-dreams').toggleClass('active');
    }
  });
  
  $('#dre').on('click', function(event) {
    $(this).toggleClass("active");
    if ($('#dre').hasClass('active')) {
      $('source').attr('src', '../music/stilldre.mp3');
      userSong.load();
      $('#start').toggleClass('non-hover-btn start-btn');
      $('#start').addClass('active');
      $('#start').prop('disabled', false);
    } else {
      $('$start-btn').toggleClass('start-btn non-hover-btn');
      $('#start-btn').removeClass('active');
      $('#start-btn').prop('disabled', true);
    }

    if ($('#nirvana').hasClass('active')) {
      $('#nirvana').toggleClass('active');
    }
    if ($('#red-hot').hasClass('active')) {
      $('#red-hot').toggleClass('active');
    }
    if ($('#blink').hasClass('active')) {
      $('#blink').toggleClass('active');
    }
    if ($('#sweet-dreams').hasClass('active')) {
      $('#sweet-dreams').toggleClass('active');
    }
  });

  $('#blink').on('click', function(event) {
    $(this).toggleClass('active');
    if ($('#blink').hasClass('active')) {
      $('source').attr('src', '../music/whatsmyageagain.mp3');
      userSong.load();
      $('#start-btn').toggleClass('non-hover-btn start-btn');
      $('#start').addClass('active');
      $('#start').prop('disabled', false);
    } else {
      $('$start').toggleClass('start-btn non-hover-btn');
      $('#start').removeClass('active');
      $('#start').prop('disabled', true);
    }

    if ($('#nirvana').hasClass('active')) {
      $('#nirvana').toggleClass('active');
    }
    if ($('#red-hot').hasClass('active')) {
      $('#red-hot').toggleClass('active');
    }
    if ($('#dre').hasClass('active')) {
      $('#dre').toggleClass('active');
    }
    if ($('#sweet-dreams').hasClass('active')) {
      $('#sweet-dreams').toggleClass('active');
    }
  });

  $('#sweet-dreams').on('click', function(event) {
    $(this).toggleClass('active');
    if ($('#sweet-dreams').hasClass('active')) {
      $('source').attr('src', '../music/sweetdreamsremix.mp3');
      userSong.load();
      $('#start-btn').toggleClass('non-hover-btn start-btn');
      $('#start').addClass('active');
      $('#start').prop('disabled', false);
    } else {
      $('$start').toggleClass('start-btn non-hover-btn');
      $('#start').removeClass('active');
      $('#start').prop('disabled', true);
    }

    if ($('#nirvana').hasClass('active')) {
      $('#nirvana').toggleClass('active');
    }
    if ($('#red-hot').hasClass('active')) {
      $('#red-hot').toggleClass('active');
    }
    if ($('#dre').hasClass('active')) {
      $('#dre').toggleClass('active');
    }
    if ($('#blink').hasClass('active')) {
      $('#blink').toggleClass('active');
    }
  });

//*******end code for button functionality********

//***until noted otherwise, the following code below is for game functionality***
  document.getElementById('start').onclick = function() {
    
    hideStartScreen();
    showCanvas();
    setGameBackground();
    if ($('#two-player').hasClass('active')){
      startGame();
      startGame2();
    } else {
      startGame();
    }
    userSong.play();

    if ($('#easy').hasClass('active')) {
      intervalEasy();
    } else if ($('#medium').hasClass('active')) {
      intervalMedium();
    }else if ($('#hard').hasClass('active')) {
      intervalHard();
    } else {
      intervalExpert();
    }
  };
  var gameOver=$('#game-over');

  function intervalEasy () {
    if ($('#two-player').hasClass('active')) {
      setInterval(updateCanvas, 20);
      setInterval(updateCanvas2, 20);
    } else {
      setInterval(updateCanvas, 20);
    }
    setInterval(checkOutcome, 800);
  }

  function intervalMedium () {
    if ($('#two-player').hasClass('active')) {
      setInterval(updateCanvas, 13);
      setInterval(updateCanvas2, 13);
    } else {
        setInterval(updateCanvas, 13);
      }
      setInterval(checkOutcome, 800);
  }

  function intervalHard () {
    if ($('#two-player').hasClass('active')) {
      setInterval(updateCanvas, 15);
      setInterval(updateCanvas2, 15);
    } else {
        setInterval(updateCanvas, 15);
      }
    setInterval(checkOutcome, 800);
  }

  function intervalExpert () {
    if ($('#two-player').hasClass('active')) {
      setInterval(updateCanvas, 15);
      setInterval(updateCanvas2, 15);
    } else {
        setInterval(updateCanvas, 15);
      }
    setInterval(checkOutcome, 800);
  }

  function hideStartScreen() {
    // remove the "canvas-display" class from the canvas tag in order to allow canvas to be shown
    let initialScreen = document.getElementById("game-intro");
    initialScreen.style.display = "none";
  }

  function showCanvas() {
    let canvas = document.getElementById("canvas-display");
    canvas.style.display = "flex";
    
    if ($('#two-player').hasClass('active')) {
      $('#canvas-display').toggleClass('sub-container canvas-container');
      let gameBoard = document.getElementById("game-canvas");
      gameBoard.style.display = "block";
      let gameBoard2= document.getElementById("game-canvas2");
      gameBoard2.style.display = "block";
    } else {
      let gameBoard = document.getElementById("game-canvas");
      gameBoard.style.display = "block";
      // $('#game-canvas').addClass("sub-container");
      }
  }

  // set the background scheme
  function setGameBackground() {
    if ($('#two-player').hasClass('active')){
      let background = document.getElementById("home-background");
      background.setAttribute("id", "background2");
    } else {
      let background = document.getElementById("home-background");
      background.setAttribute("id", "background1");
      }
  }

  function startGame() {
    createGameBoard1();
  }
  function startGame2() {
    createGameBoard2();
}

//check if/which user(s) won and/or lost
function checkOutcome() {
  if (user2stats.stamina <= 0) {
    userSong.pause();
    clearInterval();
    gameOver.style.display='block';
    $('#message').empty();
    $('#message').append("<p>Player 1 Wins! Better luck next time Player 2.</p>");
    $('#results').append("<li>Player 1's longest streak was: \'user1stats.streak\'</li> <li>Player 2's longest streak was: \'user2stats.streak\'</li>");
    $('#re-start').on("click", function (){location.reload();});
    //  document.location.reload();
  } else if (user1stats.stamina <= 0 && user2stats.stamina > 0) {
    userSong.pause();
    clearInterval();
    gameOver.style.display='block';
    $('#message').empty();
    $('#message').append("<p>Player 2 Wins! Better luck next time Player 1.</p>");
    $('#results').append("<li>Player One's longest streak was: \'user1stats.streak\'</li> <li>Player Two's longest streak was: \'user2stats.streak\'</li>");
    $('#re-start').on("click", function (){location.reload();});
    // alert("PLAYER ONE LOSES! PLAYER 2 IS BETTER.");
    // document.location.reload();
  } else if (user1stats.stamina <= 0) {
    userSong.pause();
    clearInterval();
    gameOver.style.display='block';
    $('#results').append("<li>Your longest streak was: \'user1stats.streak\'!</li>");
    $('#re-start').on("click", function (){location.reload();});
    // document.location.reload();
  }
}

userSong.onended = function() {
  if (user2stats.stamina > user1stats.stamina) {
    userSong.pause();
    gameOver.style.display='block';
    $('#message').empty();
    $('#message').append("<p>Player 2 Wins! Better luck next time Player 1.</p>");
    $('#results').append("<li>Player One's longest streak was: \'user1stats.streak\'</li> <li>Player Two's longest streak was: \'user2stats.streak\'</li>");
    $('#re-start').on("click", function (){location.reload();});
    // alert("PLAYER TWO WINS!");
    // document.location.reload();
  } else {
    userSong.pause();
    clearInterval();
    gameOver.style.display='block';
    $('#message').empty();
    $('#message').append("<p>Player 1 Wins! Better luck next time Player 2.</p>");
    $('#results').append("<li>Player 1's longest streak was: \'user1stats.streak\'</li> <li>Player 2's longest streak was: \'user2stats.streak\'</li>");
    $('#re-start').on("click", function (){location.reload();});
    // alert("PLAYER ONE WINS!");
    // document.location.reload();
    }
};

  //initializing both canvases
  let canvasOne = document.getElementById('game-canvas');
  let ctxOne = canvasOne.getContext('2d');

  let canvasTwo = document.getElementById('game-canvas2');
  let ctxTwo = canvasTwo.getContext('2d');

  //arrow images to be used for the static arrows at bottom of canvas and for the falling arrows
  let arrowImageLeft = new Image();
  arrowImageLeft.src = "../images/leftarrow.png";
  let arrowImageRight = new Image();
  arrowImageRight.src = "../images/rightarrow.png";
  let arrowImageDown = new Image();
  arrowImageDown.src = "../images/downarrow.png";
  let arrowImageUp = new Image();
  arrowImageUp.src = "../images/uparrow.png";

  //scoreboard for player1
  function createGameBoard1() {
    ctxOne.lineWidth=3;
    ctxOne.strokeStyle = "black";
    ctxOne.strokeRect(10, 58, 35, 403);
    ctxOne.fillStyle = user1stats.staminaColor;
    ctxOne.fillRect(user1stats.staminaBar.x, user1stats.staminaBar.y, user1stats.staminaBar.width, user1stats.staminaBar.height);
    ctxOne.font = "30px Georgia";
    ctxOne.fillStyle = "red";
    ctxOne.fillText("Stamina: " + user1stats.stamina, 0, 725);
    ctxOne.font = "30px Georgia";
    ctxOne.fillStyle = "green";
    ctxOne.fillText("Streak: " + user1stats.counter, 0, 760);

    ctxOne.lineWidth=2;
    ctxOne.strokeStyle = "black";
    ctxOne.strokeRect(95, 610, 335, 85);
    ctxOne.drawImage(arrowImageLeft, 100, 615, 75, 75);
    ctxOne.drawImage(arrowImageDown, 185, 615, 75, 75);
    ctxOne.drawImage(arrowImageUp, 270, 615, 75, 75);
    ctxOne.drawImage(arrowImageRight, 355, 615, 75, 75);
  }

//scoreboard for player2
  function createGameBoard2() {
    ctxTwo.lineWidth=3;
    ctxTwo.strokeStyle = "black";
    ctxTwo.strokeRect(10, 58, 35, 403);
    ctxTwo.fillStyle = user2stats.staminaColor;
    ctxTwo.fillRect(user2stats.staminaBar.x, user2stats.staminaBar.y, user2stats.staminaBar.width, user2stats.staminaBar.height);
    ctxTwo.font = "30px Georgia";
    ctxTwo.fillStyle = "red";
    ctxTwo.fillText("Stamina: " + user2stats.stamina, 0, 725);
    ctxTwo.font = "30px Georgia";
    ctxTwo.fillStyle = "green";
    ctxTwo.fillText("Streak: " + user2stats.counter, 0, 760);

    ctxTwo.lineWidth=2;
    ctxTwo.strokeStyle = "black";
    ctxTwo.strokeRect(95, 610, 335, 85);
    ctxTwo.drawImage(arrowImageLeft, 100, 615, 75, 75);
    ctxTwo.drawImage(arrowImageDown, 185, 615, 75, 75);
    ctxTwo.drawImage(arrowImageUp, 270, 615, 75, 75);
    ctxTwo.drawImage(arrowImageRight, 355, 615, 75, 75);
  }

  let board = {
    frames: 0,
    arrowFrequency: 0,
    arrowSpeed: 0,
  };

  var board2 = {
    frames: 0,
    arrowFrequency: 0,
    arrowSpeed: 0,
  };

//player1 data
  let user1stats = {
    stamina: 100,
    staminaColor: '#43e97b',
    staminaBar: {x:11, y:60, width:33, height:400,},
    counter: 0,
    misses: 0,
    streak: 0,
  };

  function stamina1Deduct() {
    user1stats.stamina-=1;
  }
  function staminaBar1Deduct () {
    user1stats.staminaBar.y+=4;
    user1stats.staminaBar.height-=4;
  }
  function stamina1Add() {
    user1stats.stamina+=1;
  }
  function staminaBar1Add() {
    user1stats.staminaBar.y-=4;
    user1stats.staminaBar.height+=4;
  }

//player2 data
  let user2stats = {
    stamina: 100,
    staminaColor: '#43e97b',
    staminaBar: {x:11, y:60, width:33, height:400,},
    counter: 0,
    misses: 0,
    streak: 0,
  };
  //stamina decrease 1pt in stamina for wrong key & increase 1pt for 5 correct keys in a row
  function stamina2Deduct() {
    user2stats.stamina-=1;
  }
  function staminaBar2Deduct() {
    user2stats.staminaBar.y+=4;
    user2stats.staminaBar.height-=4;
  }
  function stamina2Add() {
    user2stats.stamina+=1;
  }
  function staminaBar2Add() {
    user2stats.staminaBar.y-=4;
    user2stats.staminaBar.height+=4;
  }
 
  
//*****end of general code****

  //until noted otherwise, the following code below is for the
  //arrows that will fall down the canvas.
  function Arrowfalling(x, y, width, height, arrowGenerated) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.arrowGenerated = arrowGenerated;
    this.drawArrow = function () {
      ctxOne.drawImage(this.arrowGenerated, this.x, this.y, this.width, this.height);
    };
    this.drawArrow2 = function () {
      ctxTwo.drawImage(this.arrowGenerated, this.x, this.y, this.width, this.height);
    };
  }

  let gameArrows = [];
  let gameArrows2 = [];

  if ($('#easy').hasClass('active')) {
    board.arrowFrequency=35;
    board.arrowSpeed=5;
    board2.arrowFrequency=35;
    board2.arrowSpeed=5;
    } else if ($('#medium').hasClass('active')) {
      board.arrowFrequency=18;
      board.arrowSpeed=3;
      board2.arrowFrequency=18;
      board2.arrowSpeed=3;
    }else if ($('#hard').hasClass('active')) {
      board.arrowFrequency=22;
      board.arrowSpeed=3;
      board2.arrowFrequency=22;
      board2.arrowSpeed=3;
    } else {
      board.arrowFrequency=22;
      board.arrowSpeed=3;
      board2.arrowFrequency=22;
      board2.arrowSpeed=3;
    }
    if (user2stats.counter>user2stats.streak){
        user2stats.streak = user2stats.counter;
      }
    if (user1stats.counter>user1stats.streak){
      user1stats.streak = user1stats.counter;
    }

  function updateCanvas() {
    ctxOne.clearRect(0,0, 475, 800);
    startGame();
    board.frames++;
    let allArrows = [arrowImageLeft, arrowImageDown, arrowImageUp, arrowImageRight];
    let randomArrow = allArrows[Math.floor(Math.random()*allArrows.length)];

    if (board.frames % board.arrowFrequency == 1 && randomArrow == arrowImageLeft) {
      let arrowX = 100;
      let arrowY = 0;
      let arrowWidth = 75;
      let arrowHeight = 75;
      gameArrows.push(new Arrowfalling(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
    } else if (board.frames % board.arrowFrequency == 1 && randomArrow == arrowImageDown) {
        let arrowX = 185;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrowfalling(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      } else if (board.frames % board.arrowFrequency == 1 && randomArrow == arrowImageUp){
        let arrowX = 270;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrowfalling(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      } else if (board.frames % board.arrowFrequency == 1 && randomArrow == arrowImageRight) {
        let arrowX = 355;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrowfalling(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      }
    
    for (i=0; i<gameArrows.length; i++) {
      gameArrows[i].drawArrow();
      gameArrows[i].y += board.arrowSpeed;
      if (gameArrows[i].y > 703 && user1stats.stamina<=100) {
        stamina1Deduct();
        staminaBar1Deduct();
        gameArrows.splice(i, 1);
        user1stats.counter=0;
      } else if(gameArrows[i].y > 703) {
        stamina1Deduct();
        gameArrows.splice(i, 1);
        user1stats.counter=0;
      } 
    }

    if (user1stats.stamina <= 60 && user1stats.stamina > 20){
      user1stats.staminaColor="#fee140";
    } else if (user1stats.stamina <= 20) {
      user1stats.staminaColor = "#ff0844";
    }
  }

  function updateCanvas2() {
    ctxTwo.clearRect(0,0, 475, 800);
    startGame2();
    board2.frames++;
    var allArrows = [arrowImageLeft, arrowImageDown, arrowImageUp, arrowImageRight];
    var randomArrow = allArrows[Math.floor(Math.random()*allArrows.length)];

    if (board2.frames % board2.arrowFrequency == 1 && randomArrow == arrowImageLeft) {
      var arrowX = 100;
      var arrowY = 0;
      var arrowWidth = 75;
      var arrowHeight = 75;
      gameArrows2.push(new Arrowfalling(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
    } else if (board2.frames % board2.arrowFrequency == 1 && randomArrow == arrowImageDown) {
        var arrowX2 = 185;
        var arrowY2 = 0;
        var arrowWidth2 = 75;
        var arrowHeight2= 75;
        gameArrows2.push(new Arrowfalling(arrowX2, arrowY2, arrowWidth2, arrowHeight2, randomArrow));
      } else if (board2.frames % board2.arrowFrequency == 1 && randomArrow == arrowImageUp){
        var arrowX3 = 270;
        var arrowY3 = 0;
        var arrowWidth3 = 75;
        var arrowHeight3 = 75;
        gameArrows2.push(new Arrowfalling(arrowX3, arrowY3, arrowWidth3, arrowHeight3, randomArrow));
      } else if (board2.frames % board2.arrowFrequency == 1 && randomArrow == arrowImageRight) {
        var arrowX4 = 355;
        var arrowY4 = 0;
        var arrowWidth4 = 75;
        var arrowHeight4 = 75;
        gameArrows2.push(new Arrowfalling(arrowX4, arrowY4, arrowWidth4, arrowHeight4, randomArrow));
      }
    
    for (i=0; i<gameArrows2.length; i++) {
      gameArrows2[i].drawArrow2();
      gameArrows2[i].y += board2.arrowSpeed;
      if (gameArrows2[i].y > 703 && user2stats.stamina<=100) {
        stamina2Deduct();
        staminaBar2Deduct();
        gameArrows2.splice(i, 1);
        user1stats.counter=0;
      } else if(gameArrows2[i].y > 703) {
        stamina2Deduct();
        gameArrows2.splice(i, 1);
        user2stats.counter=0;
      } 
    }

    if (user2stats.stamina <= 60 && user2stats.stamina > 20){
      user2stats.staminaColor="#fee140";
    } else if (user2stats.stamina <= 20) {
      user2stats.staminaColor = "#ff0844";
    }
    // if (user2stats.counter>user2stats.streak){
    //   user2stats.streak = user2stats.counter;
    // }
}

//*end of falling arrows code*

  //until noted otherwise, the following code below is for the
  //arrows at the bottom on the "dance floor".

  //setting arrow key commands to functions that will verify if any of the falling
  //arrows match the arrow on the bottom that corresponds with the arrow key pushed.
  document.onkeydown = function(e) {
    // console.log(e);
    switch (e.keyCode) {
      // ascii keys for arrow keys
     case 37: 
      verifyArrow1.arrowLeft();
      break;
     case 38: 
      verifyArrow1.arrowUp();
      break;
     case 39: 
      verifyArrow1.arrowRight();
      break;
     case 40: 
      verifyArrow1.arrowDown();
      break;
    // ascii keys for 'w','a','s',d'
     case 65: 
      verifyArrow2.arrowLeft();
      break;
     case 87: 
      verifyArrow2.arrowUp();
      break;
     case 68: 
      verifyArrow2.arrowRight();
      break;
     case 83: 
      verifyArrow2.arrowDown();
      break;
    }
  };

  //object with the functions that are doing the verifying after the arrow key is clicked.
  let verifyArrow1 = {
    arrowLeft: function() {
      let correctKey = 0;
      for (i=0; i<gameArrows.length; i++) {
        if(gameArrows[i].y > 580 && gameArrows[i].y+gameArrows[i].height < 706 && gameArrows[i].x == 100) {
          gameArrows.splice(i, 1);
          user1stats.counter++;
          correctKey = 1;
          ctxOne.fillStyle = "linear-gradient(to top, #43e97b 0%, #38f9d7 100%)";
          ctxOne.fillRect(95, 610, 85, 85);
        }
      } 
      if(correctKey == 0 && user1stats.stamina <=100) {
        stamina1Deduct();
        staminaBar1Deduct();
        user1stats.counter = 0;
        ctxOne.fillStyle = "red";
        // "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)";
        ctxOne.fillRect(95, 610, 85, 85);
      } else if(correctKey == 0) {
        stamina1Deduct();
        user1stats.counter = 0;
        ctxOne.fillStyle = "red";
        ctxOne.fillRect(95, 610, 85, 85);
        } else if (user1stats.counter%5==0 && user1stats.stamina>=100) {
        stamina1Add();
        } else if (user1stats.counter%5==0 && user1stats.stamina<100) {
        stamina1Add();
        staminaBar1Add();
        }
    },
    arrowRight: function() {
      let correctKey = 0;
      for (i=0; i<gameArrows.length; i++) {
        if (gameArrows[i].y > 580 && gameArrows[i].y+gameArrows[i].height < 706 && gameArrows[i].x === 355) {
        gameArrows.splice(i, 1);
        user1stats.counter++;
        correctKey = 1;
        ctxOne.fillStyle = "linear-gradient(to top, #43e97b 0%, #38f9d7 100%)";
        ctxOne.fillRect(350, 610, 85, 85);
        }
      }
      if(correctKey == 0 && user1stats.stamina <=100) {
        stamina1Deduct();
        staminaBar1Deduct();
        user1stats.counter = 0;
        ctxOne.fillStyle = "red";
        ctxOne.fillRect(350, 610, 85, 85);
      } else if(correctKey == 0) {
        stamina1Deduct();
        user1stats.counter = 0;
        ctxOne.fillStyle = "red";
        ctxOne.fillRect(350, 610, 85, 85);
        } else if (user1stats.counter%5==0 && user1stats.stamina>=100) {
        stamina1Add();
        } else if (user1stats.counter%5==0 && user1stats.stamina<100) {
        stamina1Add();
        staminaBar1Add();
        }
    },
    arrowDown: function() {
      let correctKey = 0; 
      for (i=0; i<gameArrows.length; i++) {
        if (gameArrows[i].y > 580 && gameArrows[i].y+gameArrows[i].height < 706 && gameArrows[i].x === 185) {
          gameArrows.splice(i, 1);
          user1stats.counter++;
          correctKey = 1;
          ctxOne.fillStyle = "linear-gradient(to top, #43e97b 0%, #38f9d7 100%)";
          // ctxOne.strokeStyle = "green";
          ctxOne.fillRect(180, 610, 85, 85);
        }
      }
      if(correctKey == 0 && user1stats.stamina <=100) {
        stamina1Deduct();
        staminaBar1Deduct();
        user1stats.counter = 0;
        ctxOne.fillStyle = "red";
        ctxOne.fillRect(180, 610, 85, 85);
      } else if(correctKey == 0) {
        stamina1Deduct();
        user1stats.counter = 0;
        ctxOne.fillStyle = "red";
        ctxOne.fillRect(180, 610, 85, 85);
        } else if (user1stats.counter%5==0 && user1stats.stamina>=100) {
        stamina1Add();
        } else if (user1stats.counter%5==0 && user1stats.stamina<100) {
        stamina1Add();
        staminaBar1Add();
        }
    },
    arrowUp: function() {
      let correctKey = 0;
      for (i=0; i<gameArrows.length; i++) {
        if (gameArrows[i].y>580 && gameArrows[i].y+gameArrows[i].height<706 && gameArrows[i].x==270) {
          gameArrows.splice(i, 1);
          user1stats.counter++;
          correctKey=1;
          ctxOne.fillStyle = "linear-gradient(to top, #43e97b 0%, #38f9d7 100%)";
          ctxOne.fillRect(265, 610, 85, 85);
          // ctxOne.strokeStyle = "green";
        }
      }
      if(correctKey==0 && user1stats.stamina<=100) {
        stamina1Deduct();
        staminaBar1Deduct();
        user1stats.counter=0;
        ctxOne.fillStyle="red";
        ctxOne.fillRect(265, 610, 85, 85);
      } else if(correctKey==0) {
        stamina1Deduct();
        user1stats.counter=0;
        ctxOne.fillStyle="red";
        ctxOne.fillRect(265, 610, 85, 85);
        } else if (user1stats.counter%5==0 && user1stats.stamina>=100) {
        stamina1Add();
        } else if (user1stats.counter%5==0 && user1stats.stamina<100) {
        stamina1Add();
        staminaBar1Add();
        }
    },
  };

  let verifyArrow2 = {
    arrowLeft: function() {
      let correctKey2 = 0;
      for (i=0; i<gameArrows2.length; i++) {
        if(gameArrows2[i].y>580 && gameArrows2[i].y+gameArrows2[i].height<706 && gameArrows2[i].x==100) {
          gameArrows2.splice(i, 1);
          user2stats.counter++;
          correctKey2=1;
          ctxTwo.fillStyle="linear-gradient(to top, #43e97b 0%, #38f9d7 100%)";
          ctxTwo.fillRect(95, 610, 85, 85);
        }
      } 
      if(correctKey2==0 && user2stats.stamina<=100) {
        stamina2Deduct();
        staminaBar2Deduct();
        user2stats.counter=0;
        ctxTwo.fillStyle="red";
        ctxTwo.fillRect(95, 610, 85, 85);
      } else if(correctKey2==0) {
        stamina2Deduct();
        user2stats.counter=0;
        ctxTwo.fillStyle="red";
        ctxTwo.fillRect(95, 610, 85, 85);
        } else if (user2stats.counter%5==0 && user2stats.stamina>=100) {
        stamina2Add();
        } else if (user2stats.counter%5==0 && user2stats.stamina<100) {
        stamina2Add();
        staminaBar2Add();
        }
    },
    arrowRight: function() {
      var correctKey2 = 0;
      for (i=0; i<gameArrows2.length; i++) {
        if (gameArrows2[i].y > 580 && gameArrows2[i].y+gameArrows2[i].height < 706 && gameArrows2[i].x === 355) {
        gameArrows2.splice(i, 1);
        user2stats.counter++;
        correctKey2 = 1;
        ctxTwo.fillStyle = "linear-gradient(to top, #43e97b 0%, #38f9d7 100%)";
        ctxTwo.fillRect(350, 610, 85, 85);
        }
      }
      if(correctKey2 == 0 && user2stats.stamina <=100) {
        stamina2Deduct();
        staminaBar2Deduct();
        user1stats.counter = 0;
        ctxTwo.fillStyle = "red";
        ctxTwo.fillRect(350, 610, 85, 85);
      } else if(correctKey2 == 0) {
        stamina2Deduct();
        user2stats.counter = 0;
        ctxTwo.fillStyle = "red";
        ctxTwo.fillRect(350, 610, 85, 85);
        } else if (user2stats.counter%5==0 && user2stats.stamina>=100) {
        stamina2Add();
        } else if (user2stats.counter%5==0 && user2stats.stamina<100) {
        stamina2Add();
        staminaBar2Add();
        }
    },
    arrowDown: function() {
      var correctKey2 = 0; 
      for (i=0; i<gameArrows2.length; i++) {
        if (gameArrows2[i].y > 580 && gameArrows2[i].y+gameArrows2[i].height < 706 && gameArrows2[i].x == 185) {
          gameArrows2.splice(i, 1);
          user2stats.counter++;
          correctKey2 = 1;
          ctxTwo.fillStyle = "linear-gradient(to top, #43e97b 0%, #38f9d7 100%)";
          ctxTwo.fillRect(180, 610, 85, 85);
        }
      }
      if(correctKey2==0 && user1stats.stamina<=100) {
        stamina2Deduct();
        staminaBar2Deduct();
        user2stats.counter = 0;
        ctxTwo.fillStyle = "red";
        ctxTwo.fillRect(180, 610, 85, 85);
      } else if(correctKey2 == 0) {
        stamina2Deduct();
        user2stats.counter = 0;
        ctxTwo.fillStyle = "red";
        ctxTwo.fillRect(180, 610, 85, 85);
        } else if (user2stats.counter%5==0 && user2stats.stamina>=100) {
        stamina2Add();
        } else if (user2stats.counter%5==0 && user2stats.stamina<100) {
        stamina2Add();
        staminaBar2Add();
        }
    },
    arrowUp: function() {
      var correctKey2 = 0;
      for (i=0; i<gameArrows2.length; i++) {
        if (gameArrows2[i].y > 580 && gameArrows2[i].y+gameArrows2[i].height < 706 && gameArrows2[i].x === 270) {
          gameArrows2.splice(i, 1);
          user2stats.counter++;
          correctKey2 = 1;
          ctxTwo.fillStyle = "linear-gradient(to top, #43e97b 0%, #38f9d7 100%)";
          ctxTwo.fillRect(265, 610, 85, 85);
        }
      }
      if(correctKey2== 0 && user2stats.stamina <=100) {
        stamina2Deduct();
        staminaBar2Deduct();
        user2stats.counter = 0;
        ctxTwo.fillStyle = "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)";
        ctxTwo.fillRect(265, 610, 85, 85);
      } else if(correctKey2 == 0) {
        stamina2Deduct();
        user2stats.counter = 0;
        ctxTwo.fillStyle = "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)";
        ctxTwo.fillRect(265, 610, 85, 85);
        } else if (user2stats.counter%5==0 && user2stats.stamina>=100) {
        stamina2Add();
        } else if (user2stats.counter%5==0 && user2stats.stamina<100) {
        stamina2Add();
        staminaBar2Add();
        }
    },
  };
};


