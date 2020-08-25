function akan(){
  var birthDate = document.getElementById("birthDate").value;
  var birthYear = document.getElementById("birthYear").value;
  var birthMonth = document.getElementById("birthMonth").value;
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


var birthDate = parseInt("birthDate")

var birthYear = parseInt("birthYear")

var birthMonth = parseInt("birthMonth")


if (birthDate> 31 || birthDate < 0){
  console.log("Invalid date please re-enter");
}

var birthMonth = parseInt("birthMonth");

if (birthMonth > 12 || birthMonth <0){
  console.log("Invalid month please re-enter")
}
}




