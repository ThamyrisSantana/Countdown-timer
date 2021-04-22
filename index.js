let timer = document.getElementById("time");
let button = document.getElementById("button");
let sound = document.getElementById("audio");

let sec = 59;

function countDown() {
  setInterval(function () {
    if (sec <= 0) {
      clearInterval((sec = 0));
    }
    timer.innerHTML = sec;
    sec -= 1;
  }, 1000);
}

button.addEventListener("click", countDown);
