var button = document.getElementById("submit")
var output = document.getElementById("output");
var input = document.getElementById("input");
var radio = document.getElementsByName("tempUnit");

button.addEventListener("click", displayUserData);
button.addEventListener("checked", toCelsius)

function displayUserData () {
  var display = input.value;
  output.value = "Your Temp is, " + display
  toCelsius();
  console.log("user input", output.value);
}


function toCelsius () {
  var userText = input.value;
  var converted = ((userText-32) / 1.8);
  output.value = converted
  var unit = "&#8451";
  console.log("cel", output.value)
}


// function toFahrenheit () {
//   var userText = document.getElementById("input").value;
//   var converted = ((userText-32) / 1.8);
//   var unit = "&#8457";
// }


// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

// // Get a reference to the button element in the DOM
// var button = document.getElementById("submite");

// // This function should determine which conversion should
// // happen based on which radio button is selected.

// // Assign a function to be executed when the button is clicked



