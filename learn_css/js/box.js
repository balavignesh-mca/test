const box = document.getElementById("box")[0];
const play_btn = document.getElementById("play_btn");
const pause_btn = document.getElementById("pause_btn");

play_btn.addEventListener(
  "click",
  () => (box.style.animationPlayState = "running")
);

pause_btn.addEventListener(
  "click",
  () => (box.style.animationPlayState = "paused")
);
