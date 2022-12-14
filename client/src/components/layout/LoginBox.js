import React, {Fragment} from 'react';

const LoginBox = () => {
    return(
        <Fragment>

            <div className="login">


                <a href="#"><img src="images/logintry2_75x75.png" onClick="loginCredentials()" ></img></a>
                <div id="login-content">
                    <div className="arrow-up"></div>

                    <div id="loginDropDown">
                        <form className="login-form">

                            <p style="font-weight: bold">Login Email</p>
                            <input className="inputBoxBlack" type="email" name="LoginEmail">
                                <br>
                                    <p style="font-weight: bold">Password</p>
                                    <input className="inputBoxBlack" type="text" name="Password">
                                        <br>

                                            <a href="#"><p
                                                style="font-weight: bold; font-size: 14px; color: #000000;">Forgot Login
                                                Credentials?</p></a>

                                            <input className="buttonBlack" type="submit" value="Login" />

                        </form>
                    </div>
                </div>
            </div>

            <script>
                function loginCredentials() {
                var x = document.getElementById("login-content");
                if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
            }
            </script>

            <script src="static/app.js"></script>

        </Fragment>
)

}

export default LoginBox;