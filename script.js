var numder1;
var number2;

number1 = math.floor((math.random() *10) +1);
number2 = math.floor((math.random() *10) +1);
document.getElementById("number1").innerHTML = number1;
document.getElementById("number2").innerHTML = number2;

var answer = number1 + number2;

var chekAnswer = document.querySelector("input[type=text]");
var value = checkAnswer.value;
var btn = document.querySelector("input[type=button][value=check]");
btn.onclick = function() {
  value = checkAnswer.value;
  if(value == answer){
    alert("correcte");
  }else{
    alert("incorrecte + answer");
  }

  document.querySelector("input[type=text]").value = "";
  document.getElementById("number1").innerHTML = "";
  document.getElementById("number2").innerHTML = "";
  number1 = Math.floor((Math.random() * 10) + 1);
  number2 = Math.floor((Math.random() * 10) + 1);
  document.getElementById("number1").innerHTML = number1;
  document.getElementById("number2").innerHTML = number2;

  answer = number1 + number2

};
