import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {logout} from "../../actions/auth";

import logo from './logo3.png';
import logout1 from './logout2.png';

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

                <div className="nav_icons">
                <div className="home_button">
                  <Link to='/'>  <img src={logo}/></Link>

                </div>
                <div className="logoutlogo">

                    <Link onClick={logout}>  <img  src={logout1}/></Link>
                </div>

                </div>







            </header>




        </Fragment>

    )
}



Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired

}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logout})(Navbar);