import React, {Fragment, useState} from 'react';
import { Alert } from 'react-alert'
import {Link} from "react-router-dom";


const RegisterDoc = () => {
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

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        if(DocPassword !==DocPasswordConf){
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
                            <Link to="/"><button
                                type="submit"
                                value="Submit"
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

export default RegisterDoc;