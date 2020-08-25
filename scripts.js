
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// to obtain numeric data

  function genName(params) {
        var year = parseInt(document.getElementById("birthYear").value);
	      var month = parseInt(document.getElementById("birthMonth").value);
	      var date = parseInt(document.getElementById("birthDate").value);
        var male = document.getElementById("gender");
	      var female = document.getElementById("gender");
  // to validate month and date 

  if (date < 0 || date > 32) {
    alert ( "Invalid date. please re-enter the date of birth" );
  } 
// to validate month 

  if (month <0 || month > 12){
    alert ( "Invalid month. please re-neter the month of birth");
  }
// to store 
  }

