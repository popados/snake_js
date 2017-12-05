//nik
var snakeX = 150, snakeY = 150, snake_speed = 2, x_limit = 400;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// var snake = {
//
// }
//
// function draw() {
//   var snake = ctx.fillRect(snakeX, snakeY, 25, 25);
// }
// ctx.fillStyle = ('#008000') green

  // ctx.beginPath();
  // ctx.rect(20, 40, 50, 50);
  // ctx.fillStyle = "red";
  // ctx.fill();
  // ctx.closePath();


//console.log = key_press;
//console.log = key_code;

function moveSnake() {

      window.addEventListener("keypress", function(event){
      console.log(event.key);
      console.log(event.which);
      console.log(event);
    });
//THIS ISNT WORKING RIGHT
  // if (key_press === "100" || key_press === "100") {
  //   snakeX + 300;
  //   console.log(snakeX)
  // }

  //
  // if(move === "d" || move === "D"){
  //   snakeX + 10;
  // }
  // else {
  //   return
  // }

  // console.log(key_press);
return snakeX
}


function drawSnake(ctx, snakeX, snakeY) {
  snakeX = 150;
  snakeY = 150;
  ctx.fillStyle = ('#008000')
  ctx.fillRect(snakeX, snakeY, 25, 25);
  return snakeX, snakeY;
}



drawSnake(ctx, snakeX, snakeY);
moveSnake();



// moveSnake(keyDown);
// console.log(keyDown);
//console.log('snake');
