function akanData(params) {

var birthDate = document.getElementById("birthDate").value;
var birthYear = document.getElementById("birthYear").value;
var birthMonth = document.getElementById("birthMonth").value;
}

var birthDateno = parseInt("birthDate");
if (birthDateno > 31){
  console.log("Invalid date please re-enter");
}