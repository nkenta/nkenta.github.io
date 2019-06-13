var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
var draw = document.getElementById('canvas');
var drawPattern = getComputedStyle(draw);
canvas.width = parseInt(drawPattern.getPropertyValue("width"));
canvas.height = parseInt(drawPattern.getPropertyValue("height"));


var pointer = { x: 0, y: 0 };

canvas.addEventListener('mousemove', function (e) {
    pointer.x = e.pageX - this.offsetLeft;
    pointer.y = e.pageY - this.offsetTop;

}, false);

// formate the board properties
ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = 'wheat';

canvas.addEventListener('mousedown', function (e) {
// Controls the flow path of the pointer
ctx.beginPath();
ctx.moveTo(pointer.x, pointer.y);
canvas.addEventListener('mousemove', onDraw, false);
}, false);

canvas.addEventListener('mouseup', function(){
    canvas.removeEventListener('mousemove', onDraw, false);
}, false);

var onDraw = function() {
    ctx.lineTo(pointer.x, pointer.y);
    ctx.stroke();
};