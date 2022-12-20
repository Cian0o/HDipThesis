import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import PropTypes from "prop-types";
import {setAlert} from "../../actions/alert";



const RegisterPharma = ({setAlert}) => {

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

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        if(PharmaPassword !==PharmaPasswordConf){
            setAlert('Passwords to not match!', 'danger');
        }else{
            const newPharma = {
                PSIN,
                PharmaEmail,
                PharmaPassword,
                PharmaPasswordConf,
                PharmaName,
                PharmaPhone,
                PharmaAddress
            }
            try{
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const body = JSON.stringify(newPharma);

                const res = await axios.post('/api/pharmacies', body, config);
                console.log(res.data);

            }catch(err){
                console.log(err.response.data);

            }
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
                            <button
                                type="submit"
                                value="Register"
                                className="buttonGreenL"
                                style={{verticalAlign: "middle"}}
                            >
                                <span> Register </span>
                            </button>                       </form>
                    </div>

                </div>
            </div>


        </section>

    );
}

RegisterPharma.propTypes = {
    setAlert: PropTypes.func.isRequired,
};
export default connect(null, {setAlert})(RegisterPharma);