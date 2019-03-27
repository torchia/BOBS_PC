var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function login() {
    console.log(attempt)
var username = document.getElementById("Email").value;
var password = document.getElementById("Password").value;
if ( username == "test@test.com" && password == "123"){
alert ("Login successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}