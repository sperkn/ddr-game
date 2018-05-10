window.onload = function() {
  //*until noted otherwise, the following code below is for general use.*

  //every 40ms interval() function initiates updateCanvas(), which is the "engine"
  //that creates the arrows and pushes them onto the screen.
  function interval (){
    setInterval(updateCanvas, 40);
  }

  let theCanvas = document.getElementById("game-canvas");
  let ctx = theCanvas.getContext("2d");
  

  document.getElementById("start-button").onclick = function() {
    removeStartScreen();
    setBackground();
    interval();
    startGame();
  };

  function removeStartScreen() {
    let initialScreen = document.getElementById("game-intro");
    initialScreen.innerHTML = "";
  }

  function setBackground() {
    // remove the "display" class from the canvas tag in order to
    // allow canvas to be shown and add canvas-dimensions class to
    // set the background color scheme
    let background = document.getElementById("display");
    background.setAttribute("id", "background-color");
  }

  function startGame() {
    createDanceFloor();
  }

  let board = {
    stamina: 100,
    frames: 0,
    counter: 0,
  };

  function createDanceFloor() {
    //initiate the canvas
    // let theCanvas = document.getElementById("game-canvas");
    // let ctx = theCanvas.getContext("2d");
    //dance floor characteristics
    // ctx.strokeStyle = "black";
    // ctx.fillRect(0, 700, 800, 50);
    // scoreboard
    ctx.font = "30px Helevetica";
    ctx.fillStyle = "red";
    ctx.fillText("Stamina: " + board.stamina, 0, 35);
    ctx.font = "30px Helevetica";
    ctx.fillStyle = "black";
    ctx.fillText("Counter: " + board.counter, 0, 70);

    ctx.strokeStyle = "black";
    ctx.strokeRect(95, 610, 85, 85);
    ctx.drawImage(arrowImageLeft, 100, 615, 75, 75);
    ctx.strokeRect(180, 610, 85, 85);
    ctx.drawImage(arrowImageDown, 185, 615, 75, 75);
    ctx.strokeRect(265, 610, 85, 85);
    ctx.drawImage(arrowImageUp, 270, 615, 75, 75);
    ctx.strokeRect(350, 610, 85, 85);
    ctx.drawImage(arrowImageRight, 355, 615, 75, 75);
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
  function Arrow(x, y, width, height, arrowGenerated) {
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
    createDanceFloor();
    board.frames++;
    let allArrows = [arrowImageLeft, arrowImageDown, arrowImageUp, arrowImageRight];
    let randomArrow = allArrows[Math.floor(Math.random()*allArrows.length)];

    if (board.frames % 50 === 1 && randomArrow === arrowImageLeft) {
      let arrowX = 100;
      let arrowY = 0;
      let arrowWidth = 75;
      let arrowHeight = 75;
      gameArrows.push(new Arrow(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
    } else if (board.frames % 50 === 1 && randomArrow === arrowImageDown) {
        let arrowX = 185;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrow(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      } else if (board.frames % 50 === 1 && randomArrow === arrowImageUp){
        let arrowX = 270;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrow(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      } else if (board.frames % 50 === 1 && randomArrow === arrowImageRight) {
        let arrowX = 355;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrow(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      }
    
    for (i=0; i<gameArrows.length; i++) {
      gameArrows[i].drawArrow();
      gameArrows[i].y += 5;

      if(gameArrows[i].y > 700) {
      gameArrows.splice(i, 1);
      // console.log(gameArrows);
      } 
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
    if (e.keyCode === 37) {
      verifyArrow.arrowLeft();
      // if (correctKey === false) {
      //   board.stamina -= 5;
      //   board.counter = 0;
      // }
    } else if (e.keyCode === 39) {
      verifyArrow.arrowRight();
      // if (correctKey === false) {
      //   board.stamina -= 5;
      //   board.counter = 0;
      // }
    } else if (e.keyCode === 40) {
      verifyArrow.arrowDown();
      // if (correctKey === false) {
      //   board.stamina -= 5;
      //   board.counter = 0;
      // }
    } else if (e.keyCode === 38) {
      verifyArrow.arrowUp();
      // if (correctKey === false) {
      //   board.stamina -= 5;
      //   board.counter = 0;
      // }
    }
  };

  //object with the functions that are doing the verifying after the arrow key is clicked.
  let verifyArrow = {
    arrowLeft: function() {
      let correctKey = 0;
      for (i=0; i<gameArrows.length; i++) {
        if(gameArrows[i].y > 603 && gameArrows[i].y+gameArrows[i].height < 702 && gameArrows[i].x === 100) {
          // console.log("Nice!");
          board.counter++;
          correctKey = 1;
        }
      } 
      if(correctKey === 0) {
        board.stamina -= 5;
        board.counter = 0;
      } else if (board.counter%10===0) {
          board.stamina+=10;
      }
    },
    arrowRight: function() {
      let correctKey = 0;
      for (i=0; i<gameArrows.length; i++) {
        if (gameArrows[i].y > 603 && gameArrows[i].y+gameArrows[i].height < 702 && gameArrows[i].x === 355) {
        // console.log("Sweeeeeet!");
        board.counter++;
        correctKey = 1;
        }
      }
      if(correctKey === 0) {
        board.stamina -= 5;
        board.counter = 0;
      } else if (board.counter%10===0) {
        board.stamina+=10;
      }
    },
    arrowDown: function() {
      let correctKey = 0; 
      for (i=0; i<gameArrows.length; i++) {
        if (gameArrows[i].y > 603 && gameArrows[i].y+gameArrows[i].height < 702 && gameArrows[i].x === 185) {
          // console.log("Hell Yeah!");
          board.counter++;
          correctKey = 1;
        }
      }
      if(correctKey === 0) {
        board.stamina -= 5;
        board.counter = 0;
      } else if (board.counter%10===0) {
        board.stamina+=10;
      }
    },
    arrowUp: function() {
      let correctKey = 0;
      for (i=0; i<gameArrows.length; i++) {
        if (gameArrows[i].y > 603 && gameArrows[i].y+gameArrows[i].height < 702 && gameArrows[i].x === 270) {
          // console.log("Cowabonga Dude!");
          board.counter++;
          correctKey = 1;
        }
      }
      if(correctKey === 0) {
        board.stamina -= 5;
        board.counter = 0;
      } else if (board.counter%10===0) {
        board.stamina+=10;
      }
    },
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



  // let verifyArrow = {
  //   arrowLeft: function() {
  //     if (gameArrows[i].y === 610 && gameArrows[i].x === 100) {
  //       console.log("Nice!");
  //       board.counter++;
  //     } else {
  //       board.score -= 5;
  //     }
  //   },
  //   arrowRight: function() {
  //     if (gameArrows[i].y === 610 && gameArrows[i].x === 355) {
  //       console.log("Sweet!");
  //       board.counter++;
  //     } else {
  //       board.score -= 5;
  //     }
  //   },
  //   arrowDown: function() {
  //     if (gameArrows[i].y === 610 && gameArrows[i].x === 185) {
  //       console.log("Sweet!");
  //       board.counter++;
  //     } else {
  //       board.score -= 5;
  //     }
  //   },
  //   arrowUp: function() {
  //     if (gameArrows[i].y === 610 && gameArrows[i].x === 270) {
  //       console.log("Sweet!");
  //       board.counter++;
  //     } else {
  //       board.score -= 5;
  //     }
  //   },
  // };

  

  // let arrowTypes = {
  //   left: function() {ctx.drawImage(arrowImageLeft, 100, 10, 50, 50);
  //   },
  //   down: function() {ctx.drawImage(arrowImageDown, 160, 10, 50, 50);
  //   },
  //   up: function () {ctx.drawImage(arrowImageUp, 210, 10, 50, 50);
  //   },
  //   right: function () {ctx.drawImage(arrowImageRight, 260, 10, 50, 50);
  //   },
  // };

  // function drawArrowLeft() {
  //   arrowTypes.left();
  // }

  // function drawRandomArrow() {
  //   let arrowTypes = [arrows.left(), arrows.down(), arrows.up(), arrows.right()];
  //   let arrowPicked = arrowTypes[Math.floor(Math.random()*arrowTypes.length)];
  //   return 
  //   console.log(arrowPicked);
  // }

  ///////////////
  // let arrowImages = [];

  // function drawArrowLeft() {
  //   let theCanvas = document.getElementById("dance-floor");
  //   let ctx = theCanvas.getContext("2d");
  //   return ctx.drawImage(
  //     arrowImageLeft,
  //     50,
  //     10,
  //     25,
  //     25
  //   );
  // }

  // function drawArrowDown() {
  //   let theCanvas = document.getElementById("dance-floor");
  //   let ctx = theCanvas.getContext("2d");
  //   return ctx.drawImage(
  //     arrowImageDown,
  //     80,
  //     10,
  //     25,
  //     25
  //   );
  // }

  // function drawArrowUp() {
  //   let theCanvas = document.getElementById("dance-floor");
  //   let ctx = theCanvas.getContext("2d");
  //   return ctx.drawImage(
  //     arrowImageUp,
  //     110,
  //     10,
  //     25,
  //     25
  //   );
  // }

  // function drawArrowRight() {
  //   let theCanvas = document.getElementById("dance-floor");
  //   let ctx = theCanvas.getContext("2d");
  //   return ctx.drawImage(
  //     arrowImageRight,
  //     140,
  //     10,
  //     25,
  //     25
  //   );
  // }

  // arrowImages.push(drawArrowLeft(), drawArrowDown(), drawArrowUp(), drawArrowRight());

  // function drawRandomArrow() {
  //   return arrowImages[Math.floor(Math.random()*arrowImages.length)];
  // }

 

  //   createGameBoard();
  //   drawCar();
  //   for (i = 0; i < myObstacles.length; i++) {
  //     myObstacles[i].createObstacle();
  //     myObstacles[i].y += 10;
  //   }
  // };

  // let car = {
  //   width: 50,
  //   height: 80,
  //   x: 225,
  //   y: 510,
  //   moveLeft: function () {
  //     if (this.x > 60) {
  //     this.x -= 10;
  //     }
  //   },
  //   moveRight: function () {
  //    if(this.x < 390){
  //     this.x += 10;
  //     }
  //   },
  // };
};
