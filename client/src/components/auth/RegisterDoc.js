import React, {Fragment} from 'react';
import {Link} from "react-router-dom";


const RegisterDoc = () => {
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
                                    placeholder="IMC Number"
                                    name="IMCN"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Surgery Email"
                                    name="DocEmail"

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
                                    name="DocPassword"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="DocPasswordConf"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Surgery/Doctor Name"
                                    name="DocName"

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Pharmacy Phone Number"
                                    name="DocPhone"

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

export default RegisterDoc;