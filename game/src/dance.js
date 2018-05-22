window.onload = function() {
  //*until noted otherwise, the following code below is for general use.*

  let theCanvas = document.getElementById('game-canvas');
  let ctx = theCanvas.getContext('2d');

  // let introSong = document.querySelector('audio');
  // introSong.play();

  //***NEED TO FIX POP UP FOR INSTRUCTIONS!!!**
  // document.getElementById("instructions-btn").onclick = function() {
  //   let instructions = document.getElementById("instructions-display");
  //   let overlay = document.getElementsByClassName("overlay");

  //   if (instructions.style.display === "none") {
  //     instructions.style.display = "block";
  //   } else {
  //     instructions.style.display = "none";
  //   }
  //   // if (instructions.style.display === "block") {
  //   // instructions.style.display = "none";
  //   // } else if (instructions.style.display === "none") {
  //   //   instructions.style.display = "block";
  //   // }
  // };

  // if ($(this).attr("disabled")){
    // $("#two-player").attr("disabled", true);
    // $(this).attr("disabled", false);
    // $(this).toggleClass("active");
    // } else {
    //   $(this).toggleClass("active");
    //   $("#two-player").attr("disabled", true);

//***until noted otherwise, the following code below is for Button functionality on main menu***
  
  //general function for all buttons so the "blur" doesnt show around border when clicked
  $('.btn').mouseup(function() {this.blur();});

  //functions for toggling the player buttons when they are clicked
  $("#one-player").on("click", function(event) {
    $(this).toggleClass("active");
    if($('#two-player').hasClass('active')){
      $('#two-player').toggleClass('active');
    }
  });

  $('#two-player').on('click', function(event) {
    $(this).toggleClass("active");
    if($('#one-player').hasClass('active')){
      $('#one-player').toggleClass('active');
    }
  });
  

  // functions for toggling the difficulty buttons when they are clicked
  $('.diff-btn').on('click', function(event) {
    $(this).toggleClass('active');
    let difficultyId = ["#easy", "#medium", "hard", "expert"];
    for (i=0; i<difficultyId.length; i++) {
      if(difficultyId[i] == $(this)) {
        continue;
      } else {
        difficultyId.removeClass('active')[i];
      }
    }
    // let selectedButton = $(this);
    // selectedButton.toggleClass("active");
    // let allDifficultyButtons = $(".diff-btn");
    // // selectedButton.toggleClass("active");
    // for (i=0; i<allDifficultyButtons.length; i++) {
    //   // let allDifficultyButtons = $(".diff-btn");
    //   if(allDifficultyButtons[i]==selectedButton) {
    //     console.log("WTF");
    //   } else {
    //     allDifficultyButtons.removeClass("active")[i];
    //   }
        // continue;
      // } else {
      //   (allDifficultyButtons[i]).removeClass("active");
      // }
    // }
    // $(this).toggleClass("active");
    // if ($("#easy").hasClass("active")) {

    // }
    // $(".diff-btn").removeClass("active");

    // if (event!=event) {
    //   $(".diff-btn").removeClass("active");
    // }
    // switch (!$(".diff-btn")) {
    //   case $("#easy"): 
    //     $("#easy").removeClass("active");
    //     break;
    //   case $("#medium"): 
    //     $("#medium").removeClass("active");
    //     break;
    //   case $("#hard"): 
    //     $("#hard").removeClass("active");
    //     break;
    //   case $("#expert"): 
    //     $("#expert").removeClass("active");
    //     break;
    //  }
    // if ($(".diff-btn").hasClass("active")){
    //   $(".diff-btn").toggleClass("active"); 
    //   $(this).toggleClass("active");
    // } else {
    //   $(this).toggleClass("active");
    // }
    // switch($("id")) {
    //   case
    // }
  });

  // $("#two-player").on("click", function(event) {
  //   $(this).toggleClass("active");
  //   if($("#one-player").hasClass("active")){
  //     $("#one-player").toggleClass("active");
  //   }
  // });

  document.getElementById('start').onclick = function() {
    removeStartScreen();
    setGameBackground();
    startGame();
    // let introSong = document.querySelector('audio');
    // introSong.play();

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
    let initialScreen = document.getElementById('game-intro');
    initialScreen.innerHTML = "";
    let gameboard = document.getElementById('canvas-display');
    gameboard.setAttribute('id', '');
    // gamboard.style.display = "block";
  }

  function setGameBackground() {
    
    // set the background color scheme
    let background = document.getElementById('home-background');
    background.setAttribute('id', 'background1');
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
    ctx.fillText("Counter: " + user1stats.counter, 0, 70);

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
    ctx.clearRect(0,0, 800, 700);
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
      console.log(gameArrows);
      gameArrows[i].drawArrow();
      gameArrows[i].y += 5;
      if (gameArrows[i].y > 703 && user1stats.stamina<=100) {
        user1stats.stamina-=5;
        user1stats.staminaBar.y+=20;
        user1stats.staminaBar.height-=20;
        gameArrows.splice(i, 1);
        user1stats.counter=0;
      } else if(gameArrows[i].y > 700) {
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
        if(gameArrows[i].y > 601 && gameArrows[i].y+gameArrows[i].height < 704 && gameArrows[i].x === 100) {
          gameArrows.splice(i, 1);
          user1stats.counter++;
          correctKey = 1;
        }
      } 
      if(correctKey === 0 && user1stats.stamina <=100) {
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
        if (gameArrows[i].y > 601 && gameArrows[i].y+gameArrows[i].height < 704 && gameArrows[i].x === 355) {
        gameArrows.splice(i, 1);
        user1stats.counter++;
        correctKey = 1;
        }
      }
      if(correctKey === 0 && user1stats.stamina <=100) {
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
        if (gameArrows[i].y > 601 && gameArrows[i].y+gameArrows[i].height < 704 && gameArrows[i].x === 185) {
          gameArrows.splice(i, 1);
          user1stats.counter++;
          correctKey = 1;
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
        if (gameArrows[i].y > 601 && gameArrows[i].y+gameArrows[i].height < 704 && gameArrows[i].x === 270) {
          gameArrows.splice(i, 1);
          user1stats.counter++;
          correctKey = 1;
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


