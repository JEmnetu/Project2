$(document).ready(function() {
    console.log("test");
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    var sweetBtn = $(".sweet");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        swal("click");
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            alert('Please try again');
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
                email: email,
                password: password
            })
            .then(function() {
                window.location.replace("/home");
                // If there's an error, log the error
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    sweetBtn.on('click', () => {

    });

    // swal({
    //   title: "Are you sure?",
    //   text: "Are you sure that you want to leave this page?",
    //   icon: "warning",
    //   dangerMode: true,
    // })
    // .then(willDelete => {
    //   if (willDelete) {
    //     swal("Deleted!", "Your imaginary file has been deleted!", "success");
    //   }
    // });

});