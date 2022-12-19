import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <Fragment>

            <header className="navbar">
                <div >
                    <div className="dropdown">
                        <button className="dropbtn">
                            Register
                            <i className="fa fa-caret-down"/>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/registerdoc">Register Surgery</Link>
                            <Link to="/registerpharma">Register Pharmacy</Link>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                        Prescriptions
                        <i className="fa fa-caret-down"/>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/submit">Submit Prescription</Link>
                        <Link to="/retrieve">Retrieve Prescription</Link>
                        <Link to="/amend">Amend Prescription</Link>
                    </div>
                </div>
                <div className="login">
                    <Link to="#">
                        <img src="../img/logintry2_75x75.png" onClick="loginCredentials()"/>
                    </Link>
                    <div id="login-content">
                        <div className="arrow-up"/>
                        <div id="loginDropDown">
                            <form className="login-form">
                                <p style={{fontWeight: "bold"}}>LoginEmail Email</p>
                                <input className="inputBoxBlack" type="email" name="LoginEmail"/>
                                <br/>
                                <p style={{fontWeight: "bold"}}>Password</p>
                                <input className="inputBoxBlack" type="text" name="Password"/>
                                <br/>
                                <Link to="#">
                                    <p style={{fontWeight: "bold", fontSize: 14, color: "#000000"}}>
                                        Forgot LoginEmail Credentials?
                                    </p>
                                </Link>
                                <p>
                                    <input className="buttonBlack" type="submit" defaultValue="LoginEmail"/>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </header>




        </Fragment>

    )
}

function loginCredentials() {
    var x = document.getElementById("login-content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

export default Navbar;