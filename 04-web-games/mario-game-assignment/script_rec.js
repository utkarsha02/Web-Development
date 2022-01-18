// RECOMMENDED version
// It has images for the players
let gamebox = document.getElementById('gamebox');
let context = gamebox.getContext('2d');
// let image = new Image();
// image.onload = function() {
//     context.drawImage(image, 90, 90, 50, 50);
// };
// image.src = 'turtle.png';

var LEFT = false; 
var RIGHT = false;

let player = {
    color: 'blue',
    src: 'mario.png',
    id: 'player',
    h: 70,
    w: 70,
    x: 0,
    y: 315,
    velx: 1,
    vely: 0
}

let enemy = {
    color: 'red',
    src: 'turtle.png',
    id: 'enemy',
    h: 70,
    w: 70,
    x: 506,
    y: 0,
    velx: 0,
    vely: 6
}

let enemy2 = {
    color: 'red',
    src: 'turtle.png',
    id: 'enemy',
    h: 70,
    w: 70,
    x: 800,
    y: 0,
    velx: 0,
    vely: 7
}

let enemy3 = {
    color: 'red',
    src: 'turtle.png',
    id: 'enemy',
    h: 70,
    w: 70,
    x: 1013,
    y: 0,
    velx: 0,
    vely: 8
}

let enemy4 = {
    color: 'red',
    src: 'turtle.png',
    id: 'enemy',
    h: 70,
    w: 70,
    x: 200,
    y: 0,
    velx: 0,
    vely: 8
}

let enemy5 = {
    color: 'red',
    src: 'turtle.png',
    id: 'enemy',
    h: 70,
    w: 70,
    x: 1200,
    y: 0,
    velx: 0,
    vely: 8
}


let goal = {
    color: 'grey',
    src: 'castle.png',
    id: 'goal',
    h: 50,
    w: 50,
    x: 1450,
    y: 315
}

function drawBox(box) {
    let img = document.getElementById(box.id);
    context.drawImage(img, box.x, box.y, 70, 70);
}

function updateGameStatenew(obj, speed){
    obj.y += obj.vely;
    if(obj.y + obj.h > gamebox.height){
        obj.vely = -speed;
    }
    else if(obj.y< 0){
        obj.vely = speed;
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

function updateGame(){
    // update game state
    updateGameStatenew(enemy,6);
    updateGameStatenew(enemy2,7);
    updateGameStatenew(enemy3,8);
    updateGameStatenew(enemy4,5);
    updateGameStatenew(enemy5,9);
    movePlayer();
    
    // clear canvas
    context.clearRect(0, 0, gamebox.width, gamebox.height);

    // draw player and enemy
    drawBox(player);
    drawBox(enemy);
    drawBox(enemy2);
    drawBox(enemy3);
    drawBox(enemy4);
    drawBox(enemy5);
    // drawBox(enemy);
    drawBox(goal);
    
    // recursive call for function to keep calling itself
    window.requestAnimationFrame(updateGame);
}

updateGame();