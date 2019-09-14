<script>
document.getElementById("submit").onclick = function() {sendData()};

function sendData() {
  //change page to thank you! your form has been submitted, provided request goes through.
  //add option to go back, like clicking on the icon, etc
  //make overall website look nice, bootstrap etc
  
  //send email

  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'helloworldtestacc@gmail.com',
    pass: 'purdue2023'
  }
});

var mailOptions = {
	var email = document.getElementById("email");
  var emailText = email.text;
  from: 'helloworldtestacc@gmail.com',
  to: 'emailText',
  subject: 'Dining Hall Food Request',
  
  var PUID = document.getElementById("PUID");
  var PUIDText = PUID.text;
  var quan = document.getElementById("quantity");
  var quanText = quan.text;
  var time = document.getElementById("time");
  var timeText = time.text;
  var allerg = document.getElementById("allergy");
  var allergText = allerg.text;
  var food = document.getElementById("foodItem");
  var foodText = food.text;
  
  text: 'PUID: ' + PUIDText + ' would like ' + quantity + ' ' +
  foodText + '(s), at ' + timeText + '. Their allergen(s) is/are ' + allergText + '.';
};

var mailOptions = {
  from: 'helloworldtestacc@gmail.com',
  to: 'olearyf@purdue.edu',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    //redirect to confirmation page
  location.href = "C:\Users\fraol\Desktop\HelloWorld\test.html";
  }
});
  
}
</script>
