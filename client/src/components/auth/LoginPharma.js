import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginPharma} from "../../actions/auth";

import {Link, Navigate} from "react-router-dom";

const LoginPharma = ({loginPharma, isAuthenticated}) => {

    // {loginPharma}) => {
        const [formData, setFormData] = useState({
            PharmaEmail: '',
            PharmaPassword: ''
        });

        const { PharmaEmail, PharmaPassword } = formData;

        const handleChange = (e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = (e) => {
            e.preventDefault();
            loginPharma(PharmaEmail, PharmaPassword);
        };

        if(isAuthenticated){
            return(
                <Navigate to="/pharmadash" />
            )
        }

    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>

                    <div id='googleButton'>

                    </div>

                    <div>

                        {/*<div style={{ width: "100%", textAlign: "center" }}>*/}
                        {/*    <div className="tx--social" style={{ margin: "auto", maxWidth: 600 }}>*/}
                        {/*        <a*/}
                        {/*            className="social-button"*/}
                        {/*            // style={{ display: "none" }}*/}
                        {/*            id="google-connect"*/}
                        {/*        >*/}
                        {/*            <span>Google</span>*/}
                        {/*        </a>*/}
                        {/*        <a*/}
                        {/*            className="social-button"*/}
                        {/*            // style={{ display: "none" }}*/}
                        {/*            id="linkedin-connect"*/}
                        {/*        >*/}
                        {/*            <span>LinkedIn</span>*/}
                        {/*        </a>*/}

                        {/*    </div>*/}
                        {/*</div>*/}
                        <form className="form" onSubmit={onSubmit}>

                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="PharmaEmail"
                                    value={PharmaEmail}
                                    onChange={handleChange}
                                    required

                                />

                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="PharmaPassword"
                                    value={PharmaPassword}
                                    onChange={handleChange}
                                    minLength="8"

                                />
                            </div>



                            <button
                                type="submit"
                                value="Submit"
                                className="buttonGreenL"
                                style={{verticalAlign: "middle"}}
                            >
                                <span> Login </span>
                            </button>                      </form>
                    </div>
                </div>
            </div>


        </section>

    );
}

LoginPharma.propTypes = {
    loginPharma: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {loginPharma})(LoginPharma);