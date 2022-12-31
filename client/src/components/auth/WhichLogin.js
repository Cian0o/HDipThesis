import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const WhichReg = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>
                    <p className="TESTER">
                        Are you Signing in as a Doctor or Pharmacy? </p>
                    <div className="buttons">
                        <Link to="/logindoc"><button
                            type="submit"
                            value="Submit"
                            className="buttonGreenL"
                            style={{verticalAlign: "middle"}}
                        >
                            <span> Doctor </span>
                        </button></Link>
                        <Link to="/loginpharma"><button
                            type="submit"
                            value="Submit"
                            className="buttonGreenL"
                            style={{verticalAlign: "middle"}}
                        >
                            <span> Pharmacy </span>
                        </button></Link>

                    </div>
                </div>
            </div>


        </section>

    );
}

export default WhichReg;