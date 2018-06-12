function ValidateForm(){
var validName = false;
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
var validComment = false;

var letters = /^[A-Za-z]+$/;
  

var errorMessages ="";  

if (myContact.name.value===null ||
 myContact.name.value=== "" ||
    !myContact.name.value.match(letters))
 errorMessages += "<p>The name is invalid. It must be filled in and consist of letters.</p>";
 else
 validName = true; 

if (atpos < 1 || dotpos<atpos+2 || dotpos+2>=email.length) 
    // send error message. For example: 
  errorMessages += "<p>Invalid email.</p>";
else
    validEmail = true; 

if (myContact.comment.value===null ||
 myContact.comment.value=== "" ||
    !myContact.comment.value.match(letters))
 errorMessages += "<p>The comment is invalid. It must be filled in and consist of letters.</p>";
 else
 validComment = true; 

document.getElementById("errorMessages").innerHTML = errorMessages;
  return (validName && validEmail && validComment) ;
}
var d = new Date();
document.getElementById("date").innerHTML = d;