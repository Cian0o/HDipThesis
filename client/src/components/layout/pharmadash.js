import React from 'react';
import {Link, Navigate} from 'react-router-dom';


const PharmaDash = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>
                    <p className="lead">
                        The new easy ePrescribing platform for patients, GPs, and Pharmacists!
                    </p>
                    <div className="buttons">
                        <Link to="/whichreg"><button
                            type="submit"
                            value="Submit"
                            className="buttonGreenL"
                            style={{verticalAlign: "middle"}}
                        >
                            <span> Sign Up </span>
                        </button></Link>
                        <Link to="/whichlogin"><button
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

export default PharmaDash;