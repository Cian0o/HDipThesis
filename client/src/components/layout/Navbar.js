import React, {Fragment} from 'react';

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
                            <a href="RegisterSurgery.html">Register Surgery</a>
                            <a href="RegisterPharmacy.html">Register Pharmacy</a>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">
                        Prescriptions
                        <i className="fa fa-caret-down"/>
                    </button>
                    <div className="dropdown-content">
                        <a href="/FormProto.html">Submit Prescription</a>
                        <a href="/FormProto.html">Retrieve Prescription</a>
                        <a href="/FormProto.html">Amend Prescription</a>
                    </div>
                </div>
                <div className="login">
                    <a href="#">
                        <img src="images/logintry2_75x75.png" onClick="loginCredentials()"/>
                    </a>
                    <div id="login-content">
                        <div className="arrow-up"/>
                        <div id="loginDropDown">
                            <form className="login-form">
                                <p style={{fontWeight: "bold"}}>Login Email</p>
                                <input className="inputBoxBlack" type="email" name="LoginEmail"/>
                                <br/>
                                <p style={{fontWeight: "bold"}}>Password</p>
                                <input className="inputBoxBlack" type="text" name="Password"/>
                                <br/>
                                <a href="#">
                                    <p style={{fontWeight: "bold", fontSize: 14, color: "#000000"}}>
                                        Forgot Login Credentials?
                                    </p>
                                </a>
                                <p>
                                    <input className="buttonBlack" type="submit" defaultValue="Login"/>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </header>


        </Fragment>

    )
}

export default Navbar;