import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const WhichReg = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>
                    <p className="TESTER">
                        Do you wish to Register a Surgery or Pharmacy? </p>
                    <div className="buttons">
                        <Link to="/registerdoc"><button
                            type="submit"
                            value="Submit"
                            className="buttonGreenL"
                            style={{verticalAlign: "middle"}}
                        >
                            <span> Surgery </span>
                        </button></Link>
                        <Link to="/registerpharma"><button
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