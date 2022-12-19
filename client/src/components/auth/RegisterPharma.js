import React, {Fragment} from 'react';
import {Link} from "react-router-dom";


const RegisterPharma = () => {
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

export default RegisterPharma;