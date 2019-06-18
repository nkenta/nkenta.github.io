// onchange
var colors = document.getElementById('colors');
var shape = document.getElementById('shape');

function changeColor() {
    shape.style.backgroundColor = colors.value;
}
// Transition
function clockwise() {
  document.getElementById("arrow").style.transform = "rotate(180deg)";
}
function anticlockwise() {
  document.getElementById("arrow").style.transform = "";
}

// onclick
function days() {
    document.getElementById("result").innerHTML = "365 days";
}

// onmouseover
function increase(img) {
    img.style.height = "auto";
    img.style.width = "150px";
}

function normal(img) {
    img.style.height = "auto";
    img.style.width = "80px";
}

// onkeydown
function typeKey() {
    alert("Yoo! You just pressed a key.");
}

//onpageload
function onLoadPage() {
    alert("Welcome! You are seeing this because the onload fuction is working.");
}


// Animation control
const aniTweet = document.getElementById('aniTweet');
let offset = -0.1;
let interval;

const animate = ()=> {
  let current = parseFloat(aniTweet.style.opacity);

  current = isNaN(current) ? 1 : current;

  if (current === 1) {
    offset = -0.1;
  } else if (current === 0) {
    offset = 0.1;
  }

  aniTweet.style.opacity = current + offset;
};

start = ()=>{
  if(!interval){
     interval = setInterval(animate, 15);
  }
}
