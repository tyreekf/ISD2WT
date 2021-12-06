
function myBMI() {
  var weight = document.getElementById("w").value;
  var height = document.getElementById("h").value;

  var BMI = weight / (height * height);

  document.getElementById("result").innerHTML = BMI;
}
