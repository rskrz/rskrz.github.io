const el = document.querySelector("#main_bg");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX*0.05 + "px";
  el.style.backgroundPositionY = -e.offsetY*0.05 + "px";
});