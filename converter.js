var output = document.getElementById("output-target")
var keypress = document.getElementById("keypress-input");
var display = document.getElementById("converted")

keypress.addEventListener("click", function() {
  console.log("keypress")
  output.innerHTML = keypress.value;
})

display.addEventListener("click", function() {
  output.innerHTML = user-temp.value;
})