import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const LoginEmail = () => {
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
                                    placeholder="Email"
                                    name="PharmaEmail"

                                />

                            </div>



                            <Link to="/loginpassword"><button
                                type="submit"
                                value="Submit"
                                className="buttonGreenL"
                                style={{verticalAlign: "middle"}}
                            >
                                <span> Password </span>
                            </button></Link>                        </form>
                    </div>
                </div>
            </div>


        </section>

    );
}

export default LoginEmail;