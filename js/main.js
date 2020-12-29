let canvas =document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  t: 8 * box
}

function criarBG(){
  context.fillStyle = "lightgreen";
  context.fillRect (0,0,16 * box, 16 * box);
}


function criarCobrinha(){
  for(i = 0; i < snake.length; i++){
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

document.addEventListener('keydown', update); // vai pegar o envento de clique do botão

function update (event){
  if(event.keyCode == 37 && directon != "right") directon = "left";
  if(event.keyCode == 38 && directon != "down") directon = "up";
  if(event.keyCode == 39 && directon != "left") directon = "right";
  if(event.keyCode == 40 && directon != "up") directon = "down";
   
}

function iniciarJogo(){

  if(snake[0].x > 15 * box && directon == "right") snake[0].x  = 0; 
  if(snake[0].x < 0 && directon == "left") snake[0].x  = 16 * box; 
  if(snake[0].y < 15 * box && directon == "down") snake[0].y  = 0; 
  if(snake[0].y < 0 && directon == "up") snake[0].y  = 16 * box; 
  criarBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //coordenadas

  if(directon == "right") snakeX += box;
  if(directon == "left") snakeX -=box;
  if(directon == "up") snakeY -= box;
  if(directon == "down") snakeY += box;

  snake.pop();

  let newHead = {
    x: snakeX,
    y:snakeY
  }

  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);

