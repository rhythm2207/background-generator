var but1 = document.querySelector(".color1");
var but2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");

function changecolor() {
  body.style.background =
    "linear-gradient(to right ," + but1.value + "," + but2.value + ")";

  h3.textContent = body.style.background + ";";
}

but1.addEventListener("input", changecolor);
but2.addEventListener("input", changecolor);
