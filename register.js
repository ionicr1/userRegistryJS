function checkForm() {
	var fullName = document.forms["myForm"]["fullName"].value;
	var email = document.forms["myForm"]["email"].value;
	const re1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
	var passwd = document.forms["myForm"]["password"].value;
	var passwdConfirm = document.forms["myForm"]["passwordConfirm"].value;
	const reLower = /[a-z]/;
	const reUpper = /[A-Z]/;
	const reDigit = /[0-9]/;
	/*var passwordLength = document.forms["myForm"]["passwordLength"].value;
	var passwordLowercase = document.forms["myForm"]["passwordLowercase"].value;
	var passwordUppercase = document.forms["myForm"]["passwordUppercase"].value;
	var passwordMatch = document.forms["myForm"]["passwordMatch"].value;
	*/let html = "<ul>";
	if (fullName == "") {
		html += `<li>Missing full name.</li>`;
		document.getElementById("formErrors").style.display = "block";
		document.getElementById("fullName").style.border = "2px solid red";
	}
	if (!(email.match(re1))) {
		html += `<li>Invalid or missing email address.</li>`;
		document.getElementById("formErrors").style.display = "block";
		document.getElementById("email").style.border = "2px solid red";
	}
	if (!(passwd.length >= 10 && passwd.length <=20)) {
		html += `<li>Password must be between 10 and 20 characters.</li>`;
		document.getElementById("formErrors").style.display = "block";
		document.getElementById("password").style.border = "2px solid red";
	}
	if (!(passwd.match(reLower))) {
		html += `<li>Password must contain at least one lowercase character.</li>`;
		document.getElementById("formErrors").style.display = "block";
		document.getElementById("password").style.border = "2px solid red";
	}
	if (!(passwd.match(reUpper))) {
		html += `<li>Password must contain at least one uppercase character.</li>`;
		document.getElementById("formErrors").style.display = "block";
		document.getElementById("password").style.border = "2px solid red";
	}
	if (!(passwd.match(reDigit))) {
		html += `<li>Password must contain at least one digit.</li>`;
		document.getElementById("formErrors").style.display = "block";
		document.getElementById("password").style.border = "2px solid red";
	}
	if (passwd != passwdConfirm) {
		html += `<li>Password and confirmation password don't match.</li>`;
		document.getElementById("formErrors").style.display = "block";
		document.getElementById("passwordConfirm").style.border = "2px solid red";
	}
	if (fullName != "" && email.match(re1) && passwd.length >= 10 && passwd.length <=20 && passwd.match(reLower) && passwd.match(reUpper) && passwd.match(reDigit) && passwd == passwdConfirm) {
		document.getElementById("formErrors").style.display = "none";
		document.getElementById("fullName").style.border = "1px solid #aaa";
		document.getElementById("email").style.border = "1px solid #aaa";
		document.getElementById("password").style.border = "1px solid #aaa";
		document.getElementById("passwordConfirm").style.border = "1px solid #aaa";
	}
	html += "</ul>";
	document.getElementById("formErrors").innerHTML = html;
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});