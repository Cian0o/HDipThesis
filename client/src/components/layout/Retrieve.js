import React, {Fragment} from 'react';
import {Link} from "react-router-dom";


const Retrieve = () => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>


                    <div>
                        <form className="form" >
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Patient PPSN"
                                    name="PPSN"

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

export default Retrieve;