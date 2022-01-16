// java script object name is gamebox and it is also the lement named as gamebox in html
// in this case the element fetched is a canvas and to paint on it we need context
let gamebox = document.getElementById('gamebox');
let context = gamebox.getContext('2d');

// create enemy and player objects

let enemy = {
    color: 'red',
    x: 100,
    y: 0,
    h: 50,
    w: 50,
    vx: 0,
    vy: 1
}

let player = {
    color: 'blue',
    x: 0,
    y: 175,
    h: 50,
    w: 50,
    vx: 0,
    vy: 1
}

function drawBox(box){
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.w, box.h);
}

function updateGameState(){
    enemy.y += enemy.vy;
    if(enemy.y + enemy.h > gamebox.height){
        enemy.vy = -1;
    }
    else if(enemy.y< 0){
        enemy.vy = 1;
    } 
}

function updateGame(){
    // update game state
    updateGameState();

    // clear canvas
    context.clearRect(0, 0, gamebox.width, gamebox.height);

    // draw player and enemy
    drawBox(player);
    drawBox(enemy);

    // recursive call for function to keep calling itself
    window.requestAnimationFrame(updateGame);
}

updateGame();
// drawBox(player);