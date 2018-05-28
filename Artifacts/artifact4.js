function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var validFirstName = false; 
 var validPhone = false;
 var validLastName = false;
 var validEmail = false;
 var validCity = false;
 var validAddress = false;
 var atpos = userEmail.indexOf("@");
 var dotpos = userEmail.lastIndexOf(".");
 var validZipcode = false;
  
 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;

  
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
  //required: max 12 characters.
 if (myContact.username.value.length > 12 || myContact.username.value === null || myContact.username.value === "") 
 errorMessages += "<p>The username must be less than 12 characters and it is required</p>";
  
 else 
     validUsername = true;
 //console.log(validUsername); 
  
 /*********** VALIDATES PASSWORD ******** */
  //required: max 7 characters.
 if (myContact.password.value===null ||
 myContact.password.value=== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
 else
 validUserPassword = true; 
  
  /*********** VALIDATES FIRST NAME ******** */
  //required: max 20 characters.
 if (myContact.firstname.value===null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >20 ||
    !myContact.firstname.value.match(letters))
 errorMessages += "<p>The first name must be less than 20 characters and it is required. Only letters and numbers are accepted.</p>";
 else
 validFirstName = true; 
  
  /*********** VALIDATES PHONE NUMBER******** */
  
 if (myContact.phone.value===null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length <15 ||
    !myContact.phone.value.match(numbers))
 errorMessages += "<p>The phone number must be less than 15 characters and it is required. Only numbers are accepted.</p>";
 else
 validPhone = true; 
  
  /********** VALIDATES LAST NAME ***************/
 if (myContact.lastname.value===null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >50 ||
    !myContact.lastname.value.match(letters))
 errorMessages += "<p>The first name must be less than 50 characters and it is required. Only letters and numbers are accepted.</p>";
 else
 validLastName = true; 
  
  /********* VALIDATES EMAIL **************/
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) 
    errorMessages += "<p>Invalid email</p>";
else
    validEmail = true; 
  
  /******** VALIDATES CITY ***************/
     if (myContact.city.value===null ||
 myContact.city.value=== "")
 errorMessages += "<p>City is required.</p>";
 else
 validCity = true;
  
  /******** VALIDATES ADDRESS ***************/
   if (myContact.address.value===null ||
 myContact.address.value=== "")
 errorMessages += "<p>Address is required.</p>";
 else
 validAddress = true;
  
/******** VALIDATES COUNTRY ***************/
   if (myContact.address.value===null ||
 myContact.address.value=== "")
 errorMessages += "<p>Country is required.</p>";
 else
 validAddress = true;
  
  /******** VALIDATE ZIP ****************/
  if (country === "USA" && myContact.zipcode.value.Length >5)
    errorMessages += "<p>Zip code must be less than 5 characters and it is required.</p>";
 else
  validZipcode = true;
  
  

  
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword && validFirstName && validPhone && validLastName && validEmail && validCity && validAddress && validZipcode) ;
}