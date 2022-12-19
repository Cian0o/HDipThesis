import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const LoginPassword = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>

                    <div>
                        <form className="form" >

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="PharmaPassword"

                                />
                            </div>
                            


                            <Link to="/LoginPassword"><button
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

export default LoginPassword;