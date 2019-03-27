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

function signUp() {
    var name = document.forms["signupform"]["Name"].value;
    var email = document.forms["signupform"]["Email"].value;
    var pass = document.forms["signupform"]["Pass"].value;
    var cpass = document.forms["signupform"]["cPass"].value;
    var test = document.getElementById("Test");
    var test_ans = test.options[test.selectedIndex].text;

    if (name == "" || email == ""|| pass == ""|| cpass == "") {
        alert("Missing fields.")
    }
    else {
        if (test_ans == "Yes") {
            if (pass == cpass) {
                //console.log("passwords match.");
                location = "../html/confirmation.html";
            }
            else {
                alert("passwords don't match.")
            }
        }
        else {
            alert("are you a robot? the answer is wrong.")
        }
    }
    return false;
}
