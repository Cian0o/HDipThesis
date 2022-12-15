import React from 'react';
import {Link, Navigate} from 'react-router-dom';


const Landing = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>
                    <p className="lead">
                        The new easy ePrescribing platform for patients, GPs, and Pharmacists!
                    </p>
                    <div className="buttons">
                        <button
                            type="submit"
                            value="Submit"
                            className="buttonGreenL"
                            style={{verticalAlign: "middle"}}
                        >
                            <span> Sign Up </span>
                        </button>
                        <button
                            type="submit"
                            value="Submit"
                            className="buttonGreenL"
                            style={{verticalAlign: "middle"}}
                        >
                            <span> Login </span>
                        </button>

                    </div>
                </div>
            </div>


        </section>

    );
}

export default Landing;