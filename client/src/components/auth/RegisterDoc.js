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
                    <div className="buttons">
                        <Link to="/register"><button
                            type="submit"
                            value="Submit"
                            className="buttonGreenL"
                            style={{verticalAlign: "middle"}}
                        >
                            <span> Sign Up </span>
                        </button></Link>
                        <Link to="/login"><button
                            type="submit"
                            value="Submit"
                            className="buttonGreenL"
                            style={{verticalAlign: "middle"}}
                        >
                            <span> Login </span>
                        </button></Link>

                    </div>
                </div>
            </div>


        </section>

    );
}

export default RegisterDoc;