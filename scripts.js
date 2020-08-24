$(document).ready(function(){
  $("#yourAkanName").mask("dateofBirth");
});

  var birthDate = document.getElementById("birthDate").value;
  var birthYear = document.getElementById("birthYear").value;
  var birthMonth = document.getElementById("birthMonth").value;
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


var birthDateno = parseInt("birthDate");

if (birthDateno > 31 || birthDateno < 0){
  console.log("Invalid date please re-enter");
}




