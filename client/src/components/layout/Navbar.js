import React, {Fragment} from 'react';

const Navbar = () => {
    return(
    <Fragment>

        <div classNameName="navbar">

            <div className="dropdown">
                <button className="dropbtn">Register
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="RegisterSurgery.html">Register Surgery</a>
                    <a href="RegisterPharmacy.html">Register Pharmacy</a>
                </div>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn">Prescriptions
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <a href="/FormProto.html">Submit Prescription</a>
                <a href="/FormProto.html">Retrieve Prescription</a>
                <a href="/FormProto.html">Amend Prescription</a>
            </div>
        </div>


    </Fragment>

    )
}

export default Navbar;