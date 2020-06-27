let canvas = document.getElementById("canvas");
canvas.height = document.documentElement.clientHeight
canvas.width = document.documentElement.clientWidth
let ctx = canvas.getContext("2d");
let painting = false
let last
ctx.strokeStyle = "black";
ctx.lineWidth = 15;
ctx.lineCap = "round" //去除毛边

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

var isTouchDevice = 'ontouchstart' in document.documentElement;
if (isTouchDevice) {
  canvas.ontouchstart = (e) => {
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    last = [x, y]
  }
  canvas.ontouchmove = (e) => {
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    drawLine(last[0], last[1], x, y)
    last = [x, y]
  }
} else {
  canvas.onmousedown = (e) => {
    painting = true
    last = [e.clientX, e.clientY]
  }
  canvas.onmousemove = (e) => {
    if (painting === true) {
      drawLine(last[0], last[1], e.clientX, e.clientY)
      last = [e.clientX, e.clientY]
    }
  }
  canvas.onmouseup = () => {
    painting = false
  }
}

thick.onclick = () => {
  ctx.lineWidth = 15;
}
thin.onclick = () => {
  ctx.lineWidth = 5;
}
black.onclick = () => {
  ctx.strokeStyle = "black";
  black.classList.add('active')
  red.classList.remove('active')
  blue.classList.remove('active')
}
red.onclick = () => {
  ctx.strokeStyle = "red";
  black.classList.remove('active')
  red.classList.add('active')
  blue.classList.remove('active')
}
blue.onclick = () => {
  ctx.strokeStyle = "blue";
  black.classList.remove('active')
  red.classList.remove('active')
  blue.classList.add('active')
}
eraser.onclick = () => {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 15;
  black.classList.remove('active')
  red.classList.remove('active')
  blue.classList.remove('active')
}