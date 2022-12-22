import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {submitPresc} from "../../actions/submit";



const Submit = ({setAlert, submitPresc}) => {
    const [formData, setFormData] = useState({
        PPSN: '',
        patientName: '',
        presFreQ: '',
        prescContents: '',
        prescDosageMG: '',

        });

    const {PPSN,patientName,presFreQ, prescContents, prescDosageMG} = formData;

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();

            submitPresc({PPSN,patientName,presFreQ, prescContents, prescDosageMG});
        }





    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>


                    <div>
                        <form className="form" onSubmit={onSubmit} >
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Patient PPSN"
                                    name="PPSN"
                                    value={PPSN}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Patient Name"
                                    name="patientName"
                                    value={patientName}
                                    onChange={onChange}
                                    required

                                />

                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Prescription Frequency (Days)"
                                    name="presFreQ"
                                    value={presFreQ}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="textarea"
                                    placeholder="Prescription Contents"
                                    name="prescContents"
                                    value={prescContents}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Dosage in MG"
                                    name="prescDosageMG"
                                    value={prescDosageMG}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <button
                                type="submit"
                                value="Submit"
                                className="buttonGreenL"
                                style={{verticalAlign: "middle"}}
                            >
                                <span> Submit </span>
                            </button>                       </form>
                    </div>


                </div>
            </div>


        </section>

    );
}

Submit.propTypes = {
    // setAlert: PropTypes.func.isRequired,
    submitPresc: PropTypes.func.isRequired
};
export default connect(null, {submitPresc})(Submit);