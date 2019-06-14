// Transition control
function changeColor (boxTag, run){
       var box = document.getElementById(boxTag);
       box.style.transition = "background 2s linear 0.5s";
       box.style.background = run;
}

// Animation control

const circle = document.getElementById('circle');
let offset = -0.1;
let interval;

const animate = ()=> {
  let current = parseFloat(circle.style.opacity);

  current = isNaN(current) ? 1 : current;

  if (current === 1) {
    offset = -0.1;
  } else if (current === 0) {
    offset = 0.1;
  }

  circle.style.opacity = current + offset;
};

start = ()=>{
  if(!interval){
     interval = setInterval(animate, 15);
  }
}
  