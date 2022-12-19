import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";


const Submit = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>


                    <div>
                        <form className="form" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Patient PPSN"
                                    name="PPSN"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Patient Name"
                                    name="patientName"

                                />

                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Prescription Frequency (Days)"
                                    name="presFreQ"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="textarea"
                                    placeholder="Prescription Contents"
                                    name="prescContents"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Dosage in MG"
                                    name="prescDosageMG"

                                />
                            </div>

                            <Link to="/registerdoc"><button
                                type="submit"
                                value="Submit"
                                className="buttonGreenL"
                                style={{verticalAlign: "middle"}}
                            >
                                <span> Submit </span>
                            </button></Link>                        </form>
                    </div>


                </div>
            </div>


        </section>

    );
}

export default Submit;