import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import { Alert } from 'react-alert'
import PropTypes from "prop-types";
import {setAlert} from "../../actions/alert";
import {registerDoc} from "../../actions/auth";


const RegisterDoc = ({setAlert, registerDoc, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        IMCN: '',
        DocEmail: '',
        DocPassword: '',
        DocPasswordConf: '',
        DocName: '',
        DocPhone: '',
        DocAddress: '',

    });

    const {IMCN,DocEmail,DocPassword, DocPasswordConf, DocName, DocPhone, DocAddress } = formData;

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        if(DocPassword !==DocPasswordConf){
            setAlert('Passwords to not match!', 'danger');
        }else{
            registerDoc({IMCN,DocEmail,DocPassword, DocPasswordConf, DocName, DocPhone, DocAddress});
        }

    }

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
                                    type="number"
                                    placeholder="IMC Number"
                                    name="IMCN"
                                    value={IMCN}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Surgery Email"
                                    name="DocEmail"
                                    value={DocEmail}
                                    onChange={onChange}
                                    required

                                />

                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Create Password"
                                    name="DocPassword"
                                    value={DocPassword}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="DocPasswordConf"
                                    value={DocPasswordConf}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Surgery/Doctor Name"
                                    name="DocName"
                                    value={DocName}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Surgery Phone Number"
                                    name="DocPhone"
                                    value={DocPhone}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="textarea"
                                    placeholder="Surgery Address"
                                    name="DocAddress"
                                    value={DocAddress}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <button
                                type="submit"
                                value="Submit"
                                className="buttonGreenL"
                                style={{verticalAlign: "middle"}}
                            >
                                <span> Register </span>
                            </button>                        </form>
                    </div>


                </div>
            </div>


        </section>

    );
}

RegisterDoc.propTypes = {
    setAlert: PropTypes.func.isRequired,
    registerDoc: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {setAlert, registerDoc})(RegisterDoc);