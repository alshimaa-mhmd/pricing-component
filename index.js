//toggling 
var toggleContainer = document.querySelector(".toggle-container"),
    toggleBall = document.querySelector(".toggle-ball");

toggleContainer.onclick = function()
{ toggleBall.classList.toggle("right");
 toggleContainer.classList.toggle("on");
};
