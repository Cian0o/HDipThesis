const loginIcon = document.querySelector('#loginIcon');

function loginCredentials(){
    var x = document.getElementById("login-content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

loadEventListeners();

function loadEventListeners(){
    loginIcon.addEventListener(click, logInForm );
}

function logInForm{


}

//Write prescription submission with rendering of table into UI along with a clear and confirm/submit button!