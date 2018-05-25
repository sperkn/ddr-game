window.onload = function() {
  //*until noted otherwise, the following code below is for general use.*

  let theCanvas = document.getElementById('game-canvas');
  let ctx = theCanvas.getContext('2d');

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
      document.getElementById("instructions-display").style.display = "block";
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
      $('source').attr('src', './Music/HeartShapedBox.mp3');
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
      $('source').attr('src', './Music/Hey_Red_Hot.m4a');
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
      $('source').attr('src', './Music/Still_Dre.mp3');
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
      $('source').attr('src', './Music/Whats_My_Age_Again_.mp3');
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
      $('source').attr('src', './Music/Sweet_Dreams_Remix.mp3');
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
    removeStartScreen();
    setGameBackground();
    startGame();
    // let userSong = document.querySelector('audio');
    // userSong.load();
    userSong.play();

    interval();
    // checkOutcome();
  };

  //every 40ms interval() function initiates updateCanvas(), which is the "engine"
  //that creates the arrows and pushes them onto the screen.
  function interval (){
    setInterval(updateCanvas, 25);
    setInterval(checkOutcome, 800);
    }
  function removeStartScreen() {
    // remove the "canvas-display" class from the canvas tag in order to allow canvas to be shown
    let initialScreen = document.getElementById("game-intro");
    initialScreen.innerHTML = "";
    let gameboard = document.getElementById("canvas-display");
    gameboard.setAttribute("id", "");
    // gamboard.style.display = "block";
  }

  function setGameBackground() {
    
    // set the background color scheme
    let background = document.getElementById("home-background");
    background.setAttribute("id", "background1");
  }

  function startGame() {
    createGameBoard1();
    
    // setInterval(checkOutcome, 40);
  }

  let board = {
    frames: 0,
  };

  let user1stats = {
    stamina: 100,
    staminaColor: '#43e97b',
    staminaBar: {x:11, y:60, width:33, height:400,},
    counter: 0,
    misses: 0,
    streak: 0,
  };

  let user2stats = {
    stamina: 100,
    staminaColor: '#43e97b',
    staminaBar: {x:11, y:60, width:33, height:400,},
    counter: 0,
    misses: 0,
    streak: 0,
  };

  function createGameBoard1() {
    //initiate the canvas
    // let theCanvas = document.getElementById("game-canvas");
    // let ctx = theCanvas.getContext("2d");
    //dance floor characteristics
    // ctx.strokeStyle = "black";
    // ctx.fillRect(0, 700, 800, 50);
    
    // scoreboard
    ctx.strokeStyle = "black";
    ctx.strokeRect(10, 58, 35, 402);
    ctx.fillStyle = user1stats.staminaColor;
    // ctx.fillRect(11, 51, 33, 398);
    ctx.fillRect(user1stats.staminaBar.x, user1stats.staminaBar.y, user1stats.staminaBar.width, user1stats.staminaBar.height);
    ctx.font = "30px Helevetica";
    ctx.fillStyle = "red";
    ctx.fillText("Stamina: " + user1stats.stamina, 0, 35);
    ctx.font = "30px Helevetica";
    ctx.fillStyle = "black";
    ctx.fillText("Streak: " + user1stats.counter, 0, 70);

    // ctx.strokeStyle = "black";
    // ctx.strokeRect(95, 610, 85, 85);
    ctx.drawImage(arrowImageLeft, 100, 615, 75, 75);
    // ctx.strokeRect(180, 610, 85, 85);
    ctx.drawImage(arrowImageDown, 185, 615, 75, 75);
    // ctx.strokeRect(265, 610, 85, 85);
    ctx.drawImage(arrowImageUp, 270, 615, 75, 75);
    // ctx.strokeRect(350, 610, 85, 85);
    ctx.drawImage(arrowImageRight, 355, 615, 75, 75);
  }

  function checkOutcome() {
    if (user1stats.stamina <= 0) {
       alert("You lose!");
    }
  }

  let arrowImageLeft = new Image();
  arrowImageLeft.src = "images/left_arrow.png";
  let arrowImageRight = new Image();
  arrowImageRight.src = "images/right_arrow.png";
  let arrowImageDown = new Image();
  arrowImageDown.src = "images/down_arrow.png";
  let arrowImageUp = new Image();
  arrowImageUp.src = "images/up_arrow.png";
  
  //*end of general code*

  //until noted otherwise, the following code below is for the
  //arrows that will fall down the canvas.
  function Arrowfalling(x, y, width, height, arrowGenerated) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.arrowGenerated = arrowGenerated;
    this.drawArrow = function () {
      ctx.drawImage(this.arrowGenerated, this.x, this.y, this.width, this.height);
    };
  }

  let gameArrows = [];

  function updateCanvas() {
    ctx.clearRect(0,0, 800, 800);
    startGame();
    board.frames++;
    let allArrows = [arrowImageLeft, arrowImageDown, arrowImageUp, arrowImageRight];
    let randomArrow = allArrows[Math.floor(Math.random()*allArrows.length)];

    if (board.frames % 35 === 1 && randomArrow === arrowImageLeft) {
      let arrowX = 100;
      let arrowY = 0;
      let arrowWidth = 75;
      let arrowHeight = 75;
      gameArrows.push(new Arrowfalling(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
    } else if (board.frames % 35 === 1 && randomArrow === arrowImageDown) {
        let arrowX = 185;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrowfalling(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      } else if (board.frames % 35 === 1 && randomArrow === arrowImageUp){
        let arrowX = 270;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrowfalling(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      } else if (board.frames % 35 === 1 && randomArrow === arrowImageRight) {
        let arrowX = 355;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrowfalling(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      }
    
    for (i=0; i<gameArrows.length; i++) {
      gameArrows[i].drawArrow();
      gameArrows[i].y += 5;
      if (gameArrows[i].y > 703 && user1stats.stamina<=100) {
        user1stats.stamina-=5;
        user1stats.staminaBar.y+=20;
        user1stats.staminaBar.height-=20;
        gameArrows.splice(i, 1);
        user1stats.counter=0;
      } else if(gameArrows[i].y > 703) {
        user1stats.stamina-=5;
        gameArrows.splice(i, 1);
        user1stats.counter=0;
      } 
    }

    if (user1stats.stamina <= 60 && user1stats.stamina > 20){
      user1stats.staminaColor="#fee140";
    } else if (user1stats.stamina <= 20) {
      user1stats.staminaColor = "#ff0844";
    }
    // if (board.counter%10===0 && board.counter!=0) {
    //   board.stamina+=10;
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
     case 37: 
      verifyArrow.arrowLeft();
      break;
     case 38: 
      verifyArrow.arrowUp();
      break;
     case 39: 
      verifyArrow.arrowRight();
      break;
     case 40: 
      verifyArrow.arrowDown();
      break;
    }
  };

  //object with the functions that are doing the verifying after the arrow key is clicked.
  let verifyArrow = {
    arrowLeft: function() {
      let correctKey = 0;
      for (i=0; i<gameArrows.length; i++) {
        if(gameArrows[i].y > 595 && gameArrows[i].y+gameArrows[i].height < 706 && gameArrows[i].x === 100) {
          gameArrows.splice(i, 1);
          user1stats.counter++;
          correctKey = 1;
          ctx.strokeStyle = "green";
          ctx.strokeRect(95, 610, 85, 85);
        }
      } 
      if(correctKey === 0 && user1stats.stamina <=100 ) {
        user1stats.stamina -= 5;
        user1stats.counter = 0;
        user1stats.staminaBar.y+=20;
        user1stats.staminaBar.height-=20;
      } else if(correctKey === 0) {
        user1stats.stamina-=5;
        user1stats.counter = 0;
      } else if (user1stats.counter%5===0 && user1stats.stamina>90 && user1stats.stamina<100) {
        user1stats.stamina+=5;
        user1stats.staminaBar.y-= (user1stats.staminaBar.y-60);
        user1stats.staminaBar.height+= (user1stats.staminaBar.height+60);
      } else if (user1stats.counter%5===0 && user1stats.stamina<=90) {
        user1stats.stamina+=5;
        user1stats.staminaBar.y-=20;
        user1stats.staminaBar.height+=20;
      } else if (user1stats.counter%5===0) {
        user1stats.stamina+=5;
      }
    },
    arrowRight: function() {
      let correctKey = 0;
      for (i=0; i<gameArrows.length; i++) {
        if (gameArrows[i].y > 595 && gameArrows[i].y+gameArrows[i].height < 706 && gameArrows[i].x === 355) {
        gameArrows.splice(i, 1);
        user1stats.counter++;
        correctKey = 1;
        ctx.strokeStyle = "green";
        ctx.strokeRect(350, 610, 85, 85);
        }
      }
      if(correctKey === 0 && user1stats.stamina <=100 && gameArrows[i].y < 703) {
        user1stats.stamina-=5;
        user1stats.counter=0;
        user1stats.staminaBar.y+=20;
        user1stats.staminaBar.height-=20;
      } else if(correctKey === 0) {
        user1stats.stamina -= 5;
        user1stats.counter = 0;
      } else if (user1stats.counter%5===0 && user1stats.stamina>90 && user1stats.stamina<100) {
        user1stats.stamina+=5;
        user1stats.staminaBar.y-= (user1stats.staminaBar.y-60);
        user1stats.staminaBar.height+= (user1stats.staminaBar.height+60);
      } else if (user1stats.counter%5===0 && user1stats.stamina<=90) {
        user1stats.stamina+=5;
        user1stats.staminaBar.y-=20;
        user1stats.staminaBar.height+=20;
      } else if (user1stats.counter%5===0) {
        user1stats.stamina+=5;
      }
    },
    arrowDown: function() {
      let correctKey = 0; 
      for (i=0; i<gameArrows.length; i++) {
        if (gameArrows[i].y > 595 && gameArrows[i].y+gameArrows[i].height < 706 && gameArrows[i].x === 185) {
          gameArrows.splice(i, 1);
          user1stats.counter++;
          correctKey = 1;
          ctx.strokeStyle = "green";
          ctx.strokeRect(180, 610, 85, 85);
        }
      }
      if(correctKey === 0 && user1stats.stamina <=100) {
        user1stats.stamina-=5;
        user1stats.counter = 0;
        user1stats.staminaBar.y+=20;
        user1stats.staminaBar.height-=20;
      } else if(correctKey === 0) {
        user1stats.stamina-=5;
        user1stats.counter = 0;
      } else if (user1stats.counter%5===0 && user1stats.stamina>90 && user1stats.stamina<100) {
        user1stats.stamina+=5;
        user1stats.staminaBar.y-= (user1stats.staminaBar.y-60);
        user1stats.staminaBar.height+= (user1stats.staminaBar.height+60);
      } else if (user1stats.counter%5===0 && user1stats.stamina<=90) {
        user1stats.stamina+=5;
        user1stats.staminaBar.y-=20;
        user1stats.staminaBar.height+=20;
      } else if (user1stats.counter%5===0) {
        user1stats.stamina+=5;
      }
    },
    arrowUp: function() {
      let correctKey = 0;
      for (i=0; i<gameArrows.length; i++) {
        if (gameArrows[i].y > 595 && gameArrows[i].y+gameArrows[i].height < 706 && gameArrows[i].x === 270) {
          gameArrows.splice(i, 1);
          user1stats.counter++;
          correctKey = 1;
          ctx.strokeRect(265, 610, 85, 85);
          ctx.strokeStyle = "green";
        }
      }
      if(correctKey === 0 && user1stats.stamina <=100) {
        user1stats.stamina-=5;
        user1stats.counter=0;
        user1stats.staminaBar.y+=20;
        user1stats.staminaBar.height-=20;
      } else if(correctKey === 0) {
        user1stats.stamina-=5;
        user1stats.counter = 0;
      } else if (user1stats.counter%5===0 && user1stats.stamina>90 && user1stats.stamina<100) {
        user1stats.stamina+=5;
        user1stats.staminaBar.y-= (user1stats.staminaBar.y-60);
        user1stats.staminaBar.height+= (user1stats.staminaBar.height+60);
      } else if (user1stats.counter%5===0 && user1stats.stamina<=90) {
        user1stats.stamina+=5;
        user1stats.staminaBar.y-=20;
        user1stats.staminaBar.height+=20;
      } else if (user1stats.counter%5===0) {
        user1stats.stamina+=5;
      }
    },
  };
};
  // ctx.strokeStyle = "black";
  //     ctx.strokeRect(95, 610, 85, 85);
  //     ctx.drawImage(arrowImageLeft, 100, 615, 75, 75);
  //     ctx.strokeRect(180, 610, 85, 85);
  //     ctx.drawImage(arrowImageDown, 185, 615, 75, 75);
  //     ctx.strokeRect(265, 610, 85, 85);
  //     ctx.drawImage(arrowImageUp, 270, 615, 75, 75);
  //     ctx.strokeRect(350, 610, 85, 85);
  //     ctx.drawImage(arrowImageRight, 355, 615, 75, 75);


