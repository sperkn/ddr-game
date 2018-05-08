window.onload = function() {
  function interval (){
    setInterval(updateCanvas, 40);
  }

  let theCanvas = document.getElementById("game-canvas");
  let ctx = theCanvas.getContext("2d");
  

  document.getElementById("start-button").onclick = function() {
    // interval();
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
    createScoreBoard();
  }

  let board = {
    score: 0,
    frames: 0
  };

  function createScoreBoard() {
    //initiate the canvas
    // let theCanvas = document.getElementById("game-canvas");
    // let ctx = theCanvas.getContext("2d");
    //dance floor characteristics
    // ctx.strokeStyle = "black";
    // ctx.fillRect(0, 700, 800, 50);
    // scoreboard
    ctx.font = "40px Helevetica";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + board.score, 0, 35);
  }


  let arrowImageLeft = new Image();
  arrowImageLeft.src = "images/left_arrow.png";
  let arrowImageRight = new Image();
  arrowImageRight.src = "images/right_arrow.png";
  let arrowImageDown = new Image();
  arrowImageDown.src = "images/down_arrow.png";
  let arrowImageUp = new Image();
  arrowImageUp.src = "images/up_arrow.png";

// until noted otherwise, the following code below is for the
// arrows that will fall down the canvas.
  function Arrow(x, y, width, height, arrowGenerated) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.arrowGenerated = arrowGenerated;
    this.drawArrow = function () {
      ctx.drawImage(this.arrowGenerated, this.x, this.y, this.width, this.height);
      // let allArrows = [arrowTypes.left(), arrowTypes.down(), arrowTypes.up(), arrowTypes.right()];
      // let allArrows = [arrowImageLeft, arrowImageDown, arrowImageUp, arrowImageRight];
      // let randomArrow = allArrows[Math.floor(Math.random()*allArrows.length)];
      // if (randomArrow == arrowImageLeft) {
        // let arrowX = 100;
        // let arrowY = 10;
        // let arrowWidth = 50;
        // let arrowHeight = 50;
        // ctx.drawImage(randomArrow, this.x, this.y, this.width, this.height);
      // }
    };
  }
  let gameArrows = [];

  function updateCanvas() {
    ctx.clearRect(0,0, 800, 700);
    createScoreBoard();
    board.frames++;
    let allArrows = [arrowImageLeft, arrowImageDown, arrowImageUp, arrowImageRight];
    let randomArrow = allArrows[Math.floor(Math.random()*allArrows.length)];

    if (board.frames % 60 === 1 && randomArrow === arrowImageLeft) {
      let arrowX = 100;
      let arrowY = 0;
      let arrowWidth = 75;
      let arrowHeight = 75;
      gameArrows.push(new Arrow(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
    } else if (board.frames % 60 === 1 && randomArrow === arrowImageDown) {
        let arrowX = 185;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrow(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      } else if (board.frames % 60 === 1 && randomArrow === arrowImageUp){
        let arrowX = 270;
        let arrowY = 0;
        let arrowWidth = 75;
        let arrowHeight = 75;
        gameArrows.push(new Arrow(arrowX, arrowY, arrowWidth, arrowHeight, randomArrow));
      } else if (board.frames % 60 === 1 && randomArrow === arrowImageRight) {
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
      console.log(gameArrows);
      } 
    }
  }

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

  // let danceBox = {
  //   width: 50,
  //   height: 80,
  //   x: 225,
  //   y: 510,
  //   arrowLeft: function() {},
  //   arrowRight: function() {},
  //   arrowDown: function() {},
  //   arrowUp: function() {}
  // };

  // document.onkeydown = function(e) {
  //   if (e.keyCode === 37) {
  //     danceBox.arrowLeft();
  //   } else if (e.keyCode === 39) {
  //     car.arrowRight();
  //   } else if (e.keyCode === 40) {
  //     danceBox.arrowDown();
  //   } else if (e.keyCode === 38) {
  //     danceBox.arrowUp();
  //   }
  // };

  //   createGameBoard();
  //   drawCar();
  //   for (i = 0; i < myObstacles.length; i++) {
  //     myObstacles[i].createObstacle();
  //     myObstacles[i].y += 10;
  //   }
  // };

  // let carImage = new Image();
  // carImage.src = "images/car.png";

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

  // function drawCar(){
  //   ctx.drawImage(carImage, car.x, car.y, car.width, car.height);
  // }

  // let myObstacles = [];
  // let board = {
  //   score: 0,
  //   frames: 0,
  // };
};
