// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

var changeColor = function (pos) {
  if(pos<=400){
    var opacity = pos/500
    document.getElementById('nb').style.background = "rgb(0,48,73,"+opacity+")";
  }
  else{
    document.getElementById('nb').style.background = "rgb(0,48,73,0.8)";
  }
}

window.addEventListener('scroll', function(e) {
  var last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      changeColor(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});