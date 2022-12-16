import React, {Fragment} from 'react';
import {Link} from "react-router-dom";


const RegisterPharma = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>
                    <p className="TESTER">
                        EIRGH                    </p>

                    <div>
                        <form className="form" >
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="PSI Number"
                                    name="PSIN"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Pharmacy Email"
                                    name="PharmaEmail"

                                />
                                <small className="form-text">
                                    This site uses Gravatar so if you want a profile image, use a
                                    Gravatar email
                                </small>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Create Password"
                                    name="PharmaPassword"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="PharmaPasswordConf"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Pharmacy Name"
                                    name="PharmaName"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Pharmacy Phone Number"
                                    name="PharmaPhone"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="textarea"
                                    placeholder="Pharmacy Address"
                                    name="PharmaAddress"

                                />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Register" />
                        </form>
                    </div>

                </div>
            </div>


        </section>

    );
}

export default RegisterPharma;