$(function () {
    $("#username_error_message").hide();
    $("#password_error_message").hide();

    var error_username = false;
    var error_password = false;

    $("#form_username").focusout(function () {

        check_username();

    });

    $("#form_password").focusout(function () {

        check_password();

    });

    function check_username() {

        var username = $("#form_username").val();

        if (username == "test@test.com") {
            $("#username_error_message").html("No user with that username");
            $("#username_error_message").show();
            error_username = true;
        } else {
            $("#username_error_message").hide();
        }

    }

    function check_password() {

        var password = $("#form_password").val();

        if (password != "adminlogin") {
            $("#password_error_message").html("Incorrect Password");
            $("#password_error_message").show();
            error_password = true;
        } else {
            $("#password_error_message").hide();
        }

    }

    $("#loginForm").submit(function () {

        error_username = false;
        error_password = false;

        check_username();
        check_password();

        if (error_username == false && error_password == false) {
            return true;
        } else {
            return false;
        }

    });
});