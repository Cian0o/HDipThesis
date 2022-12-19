import React, {Fragment, useState} from 'react';
import { Alert } from 'react-alert'
import {Link} from "react-router-dom";

const RegisterPharma = () => {

    const [formData, setFormData] = useState({
        PSIN: '',
        PharmaEmail: '',
        PharmaPassword: '',
        PharmaPasswordConf: '',
        PharmaName: '',
        PharmaPhone: '',
        PharmaAddress: '',

    });

    const {PSIN,PharmaEmail,PharmaPassword, PharmaPasswordConf, PharmaName, PharmaPhone, PharmaAddress } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        if(PharmaPassword !==PharmaPasswordConf){
            alert('Passwords to not match!');
        }else{
            console.log(formData);
        }

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
                                    placeholder="PSI Number"
                                    name="PSIN"
                                    value={PSIN}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Pharmacy Email"
                                    name="PharmaEmail"
                                    value={PharmaEmail}
                                    onChange={onChange}
                                    required

                                />

                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Create Password"
                                    name="PharmaPassword"
                                    value={PharmaPassword}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="PharmaPasswordConf"
                                    value={PharmaPasswordConf}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Pharmacy Name"
                                    name="PharmaName"
                                    value={PharmaName}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Pharmacy Phone Number"
                                    name="PharmaPhone"
                                    value={PharmaPhone}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="textarea"
                                    placeholder="Pharmacy Address"
                                    name="PharmaAddress"
                                    value={PharmaAddress}
                                    onChange={onChange}
                                    required

                                />
                            </div>
                            <Link to="/"><button
                                type="submit"
                                value="Register"
                                className="buttonGreenL"
                                style={{verticalAlign: "middle"}}
                            >
                                <span> Register </span>
                            </button></Link>                        </form>
                    </div>

                </div>
            </div>


        </section>

    );
}

export default RegisterPharma;