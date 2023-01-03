import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {logout} from "../../actions/auth";

import logo from './logo3.png';

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
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
                <div className="logoPic">
                  <Link to='/'>  <img src={logo}/></Link>
                </div>
                <div className="login">
                    <Link to="#">
                        <img src="../img/logintry2_75x75.png" onClick="loginCredentials()"/>
                    </Link>
                    <div id="login-content">
                        <div className="arrow-up"/>
                        <div id="loginDropDown">
                            <form className="login-form">
                                <p style={{fontWeight: "bold"}}>LoginPharma Email</p>
                                <input className="inputBoxBlack" type="email" name="LoginEmail"/>
                                <br/>
                                <p style={{fontWeight: "bold"}}>Password</p>
                                <input className="inputBoxBlack" type="text" name="Password"/>
                                <br/>
                                <Link to="#">
                                    <p style={{fontWeight: "bold", fontSize: 14, color: "#000000"}}>
                                        Forgot LoginPharma Credentials?
                                    </p>
                                </Link>
                                <p>
                                    <input className="buttonBlack" type="submit" defaultValue="LoginPharma"/>
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

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired

}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logout})(Navbar);