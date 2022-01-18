// required version
let gamebox = document.getElementById('gamebox');
let context = gamebox.getContext('2d');

var deltaX = 0;
var deltaY = 0;
var LEFT = false; 
var RIGHT = false;

let player = {
    color: 'blue',
    h: 50,
    w: 50,
    x: 0,
    y: 175,
    velx: 1,
    vely: 0
}

let enemy = {
    color: 'red',
    h: 50,
    w: 50,
    x: 150,
    y: 0,
    velx: 0,
    vely: 1
}

let enemy2 = {
    color: 'red',
    h: 50,
    w: 50,
    x: 275,
    y: 0,
    velx: 0,
    vely: 2
}

let enemy3 = {
    color: 'red',
    h: 50,
    w: 50,
    x: 400,
    y: 0,
    velx: 0,
    vely: 3
}

let goal = {
    color: 'grey',
    h: 50,
    w: 50,
    x: 550,
    y: 175
}

function drawBox(box) {
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.w, box.h);
}

// function drawPlayer(box){
//     context.fillStyle = box.color;
//     context.fillRect(box.x + deltaX, box.y + deltaY, box.w, box.h);
// }

function updateGameState(){
    enemy.y += enemy.vely;
    if(enemy.y + enemy.h > gamebox.height){
        enemy.vely = -1;
    }
    else if(enemy.y< 0){
        enemy.vely = 1;
    } 
}

function updateGameState2(){
    enemy2.y += enemy2.vely;
    if(enemy2.y + enemy2.h > gamebox.height){
        enemy2.vely = -2;
    }
    else if(enemy2.y< 0){
        enemy2.vely = 2;
    } 
}

function updateGameState3(){
    enemy3.y += enemy3.vely;
    if(enemy3.y + enemy3.h > gamebox.height){
        enemy3.vely = -3;
    }
    else if(enemy3.y< 0){
        enemy3.vely = 2;
    } 
}

function movePlayer() {
	if(LEFT) { 
		player.x -= 1;
	}
	if(RIGHT) {
		player.x += 1;	
	}
    drawBox(player);
}

document.onkeydown = function(e) {
	if(e.keyCode == 37) LEFT = true;
	if(e.keyCode == 39) RIGHT = true;
}

document.onkeyup = function(e) {
	if(e.keyCode == 37) LEFT = false;
	if(e.keyCode == 39) RIGHT = false;
}

// function movePlayer(eventt){
//     switch(eventt.keyCode){
//         case 37:
//             deltaX -= 2;
//             break;
//         case 38:
//             deltaY -= 2;
//             break;
//         case 39:
//             deltaX += 2;
//             break;
//         case 40:
//             deltaY += 2;
//             break;
//     }
//     drawPlayer(player);
// }

function updateGame(){
    // update game state
    updateGameState();
    updateGameState2();
    updateGameState3();
    movePlayer();
    // clear canvas
    context.clearRect(0, 0, gamebox.width, gamebox.height);

    // draw player and enemy
    drawBox(player);
    drawBox(enemy);
    drawBox(enemy2);
    drawBox(enemy3);
    drawBox(goal);

    // recursive call for function to keep calling itself
    window.requestAnimationFrame(updateGame);
}

updateGame();