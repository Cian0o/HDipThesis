import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {retrievePresc} from "../../actions/retrieve";
import setAuthToken from "../../utils/setAuthToken";
import api from "../../utils/api";
import {RETRIEVE_PRESCRIPTION, RETRIEVE_FAIL} from "../../actions/types";




const Retrieve = ({setAlert, retrievePresc, prescription}) => {
    const [formData, setFormData] = useState({
        PPSN: ''

    });

    const {PPSN} = formData;

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();

        retrievePresc(PPSN);
    }

    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>


                    <div>
                        <form className="form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Patient PPSN"
                                    name="PPSN"
                                    value={PPSN}
                                    onChange={handleChange}
                                    required

                                />
                            </div>


                            <button
                                type="submit"
                                value="Submit"
                                className="buttonGreenL"
                                style={{verticalAlign: "middle"}}
                            >
                                <span> Retrieve </span>
                            </button>                      </form>
                    </div>


                </div>
            </div>

            <div className="prescTable">
                <p> Your Prescription is: </p>
                <table border={12}>
                    <thead>

                    <tr>
                        <td>Patient PPS Number</td>
                        <td>
                            {"{"}
                            {"{"}row["PPSN"]{"}"}
                            {"}"}
                        </td>
                    </tr>
                    <tr>
                        <td>Patient Name</td>
                        <td>
                            {"{"}
                            {"{"}row["patientName"]{"}"}
                            {"}"}
                        </td>
                    </tr>
                    <tr>
                        <td>Prescription Frequency (Days)</td>
                        <td>
                            {"{"}
                            {"{"}row["presFreQ"]{"}"}
                            {"}"}
                        </td>
                    </tr>
                    <tr>
                        <td>Prescription Contents</td>
                        <td>
                            {"{"}
                            {"{"}row["prescContents"]{"}"}
                            {"}"}
                        </td>
                    </tr>
                    <tr>
                        <td>Prescription Dosage (MG)</td>
                        <td>
                            {"{"}
                            {"{"}row["prescDosageMG"]{"}"}
                            {"}"}
                        </td>
                    </tr>

                    </thead>
                </table>
            </div>


        </section>

    );
}

Retrieve.propTypes = {
    retrievePresc: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {retrievePresc})(Retrieve);