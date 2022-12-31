import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginDoc} from "../../actions/auth";
import {loginPharma} from "../../actions/auth";

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
                                    placeholder="Email"
                                    name="PharmaEmail"

                                />

                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="PharmaPassword"

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

export default Login;