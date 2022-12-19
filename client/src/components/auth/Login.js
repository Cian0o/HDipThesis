import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>

                    <div>
                        <form className="form" >

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


                            <Link to="/registerdoc"><button
                                type="submit"
                                value="Submit"
                                className="buttonGreenL"
                                style={{verticalAlign: "middle"}}
                            >
                                <span> Login </span>
                            </button></Link>                        </form>
                    </div>
                </div>
            </div>


        </section>

    );
}

export default Login;