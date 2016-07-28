var button = document.getElementById("submit");
var output = document.getElementById("output");
var input = document.getElementById("input");
var clearBtn = document.getElementById("clear")

button.addEventListener("click", displayUserData);
button.addEventListener("checked", toCelsius)
button.addEventListener("checked", toFahrenheit)


function displayUserData () {
  if (document.getElementById("celsius").checked) {
    toCelsius();
    console.log("celsius checked")
  } else if(document.getElementById("fahrenheit").checked) {
    toFahrenheit();
    console.log("fahrenheit checked")
  }
}


function enterKeyPressed (keyPress) {
    if (keyPress.which === 13) {
        displayUserData();
  }
}

function clear () {
  document.getElementById("input").value = "";
  document.getElementById("output").innerHTML = "";
  console.log("clear clicked")
}

clearBtn.addEventListener("click", clear);

document.addEventListener("keydown", enterKeyPressed);

function toCelsius () {
  var userTextC = input.value;
  var convertedC = ((userTextC - 32) / 1.8);
  output.value = convertedC + " degrees Celsius"
  if (convertedC > 32) {
    output.style.color = "red";
  } else if (convertedC <= 0) {
    output.style.color = "blue";
  } else {
    output.style.color = "green";
  }
}


function toFahrenheit () {
  var userTextF = input.value;
  var convertedF = ((userTextF * 1.8) + 32);
  output.value = convertedF + " degrees Fahrenheit"
  if (convertedF > 90) {
    output.style.color= "red";
  } else if (convertedF <= 32) {
    output.style.color = "blue";
  } else {
    output.style.color = "green";
  }
}



// Create another button that, when clicked, clears any text in the input field.


// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.





