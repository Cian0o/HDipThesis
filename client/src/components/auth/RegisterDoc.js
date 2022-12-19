import React, {Fragment} from 'react';
import {Link} from "react-router-dom";


const RegisterDoc = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>


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

export default RegisterDoc;