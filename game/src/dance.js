window.onload = function() {
  // function interval (){
  //   setInterval(updateCanvas, 80);
  // }
  // let theCanvas = document.getElementById("dance-floor");
  // let ctx = theCanvas.getContext("2d");
  

  document.getElementById("start-button").onclick = function() {
    // interval();
    removeStartScreen();
    startGame();
  };

  function removeStartScreen() {
  let initialScreen = document.getElementById('game-intro');
  initialScreen.innerHTML="";
  }

  function startGame() {
    // console.log("Starting the game");
    createDanceFloor();
    // drawCar();
  }

  function createDanceFloor (){
    // remove the "display" class from the canvas tag in order to
    // allow canvas to be shown
    let canvasDisplay = document.getElementById('dance-floor');
    canvasDisplay.setAttribute('class', '');

    //initiate the canvas
    let theCanvas = document.getElementById('dance-floor');
    let ctx = theCanvas.getContext('2d');
    
    //dance floor characteristics
    ctx.fillStyle = '#4facfe';
    ctx.fillRect(0, 0, 1000, 800);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 300, 800);
   
  }
    //dashed middle striping for racecourse
  //   ctx.lineWidth = "10";
  //   ctx.setLineDash([35, 25]);
  //   ctx.strokeStyle = "white";
  //   ctx.moveTo(250, 0);
  //   ctx.lineTo(250, 600);
  //   ctx.stroke();

  //   // scoreboard
  //   ctx.font = "40px Helevetica";
  //   ctx.fillStyle = "red";
  //   ctx.fillText("Score: "+board.score, 0, 35);
  // }
  
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

  // document.onkeydown = function(e) {
  //   if(e.keyCode === 37){
  //     car.moveLeft();
  //   } else if (e.keyCode === 39) {
  //     car.moveRight();
  //   } else {
  //     return null;
  //   }
  //   createGameBoard();
  //   drawCar();
  //   for (i = 0; i < myObstacles.length; i++) {
  //     myObstacles[i].createObstacle();
  //     myObstacles[i].y += 10;
  //   }
  // };

};