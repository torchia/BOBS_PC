var registry = JSON.parse(localStorage.getItem('registry'));
console.log(registry);
function signUp() {
    var name = document.forms["signup"]["Name"].value;
    var email = document.forms["signup"]["Email"].value;
    var pass = document.forms["signup"]["Pass"].value;
    alert(name + email + pass);
    var user = new Object()
    {
            Name = name,
            Email = email,
            Password = pass
    }

    console.log(user);
    //localStorage.setItem('registry', JSON.stringify(user))
}