// alert('helloo')
let gamebox = document.getElementById('gamebox');
// context is like a paintbrush or pen, its an object used to paint over canvas like paint rec etc
let context = gamebox.getContext('2d');
context.fillStyle = 'green';
// 10 pix from top and bottom, 20x20 area
context.fillRect(10, 10, 20, 20);
// can't selet the above object and move it but we can redraw it

let posX = 0;
let posY = 0;

setInterval(function(){
    // console.log('Hello World ' + new Date())
    posX += 10;
    posY += 10;
    context.clearRect(0,0,gamebox.width,gamebox.height);
    context.fillRect(posX,posY, 20, 20)
}, 2000)