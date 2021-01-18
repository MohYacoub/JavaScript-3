////////////////////////// ES5 \\\\\\\\\\\\\\\\\\\\\\\\\\
// Regular function
function square(x, y) {
  var result = x * y;
  document.getElementById("output").innerHTML = result;
}
// Function invoking
square(2, 5);

// Function expresion
const squareExpression = function (x, y) {
  var result = x * y;
  document.getElementById("output2").innerHTML = result;
};
squareExpression(9, 5);

////////////////////////// ES6 \\\\\\\\\\\\\\\\\\\\\\\\\\

//Arrow function
const squareArrow = (x, y) => {
  var result = x * y;
  document.getElementById("output3").innerHTML = result;
};
squareArrow(7, 8);
