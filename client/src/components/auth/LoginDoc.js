import React, {Fragment, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loginDoc} from "../../actions/auth";


const LoginDoc = ({loginDoc, isAuthenticated}) => {

    // {loginPharma}) => {
    const [formData, setFormData] = useState({
        DocEmail: '',
        DocPassword: ''
    });

    const { DocEmail, DocPassword } = formData;

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        loginDoc(DocEmail, DocPassword);
    };

    if(isAuthenticated){
        return(
            <Navigate to="/docdash" />
        )
    }

    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="lead">thÉireP</h1>

                    <div>
                        <form className="form" onSubmit={onSubmit}>

                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="DocEmail"
                                    value={DocEmail}
                                    onChange={handleChange}
                                    required

                                />

                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="DocPassword"
                                    value={DocPassword}
                                    onChange={handleChange}
                                    required

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

LoginDoc.propTypes = {
    loginDoc: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {loginDoc})(LoginDoc);