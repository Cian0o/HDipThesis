import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import ViewingPane from "./components/layout/ViewingPane";
import Footer from "./components/layout/Footer";
import WhichReg from "./components/auth/WhichReg";
import DocDash from "./components/layout/docdash";
import PharmaDash from "./components/layout/pharmadash";
import RegisterDoc from "./components/auth/RegisterDoc";
import RegisterPharma from "./components/auth/RegisterPharma";
import WhichLogin from "./components/auth/WhichLogin";
import LoginPharma from "./components/auth/LoginPharma";
import LoginDoc from "./components/auth/LoginDoc";
import LoginPassword from "./components/auth/LoginPassword";
import Submit from "./components/prescriptions/Submit";
import Retrieve from "./components/prescriptions/Retrieve";
import ViewPresc from "./components/prescriptions/ViewPresc";
import Amend from "./components/prescriptions/Amend";
import Alert from "./components/layout/Alert";
import { loadUserDoc } from "./actions/auth";
import { loadUserPharma } from "./actions/auth";
import jwt_decode from 'jwt-decode';


import {Provider} from 'react-redux';
import store from './store';


import '././App.css';
import setAuthToken from "./utils/setAuthToken";



//     Adding empty array as second parameter below prevents useEffect from looping so it only runs once.
//     From React documentation: "You can tell React to skip applying an effect if certain values haven’t
//     changed between re-renders. To do so, pass an array as an optional second argument to useEffect.

// if(localStorage.token){
//     setAuthToken(localStorage.token)}


const App = () => {

    const [user,setUser] = useState({});

    function handleCallbackResponse(response){
        console.log("Encoded JWT Token ID token" + response.credential);
        const userObject = jwt_decode(response.credential);
        console.log(userObject);
    }

    useEffect(()  => {
        google.accounts.id.initialize({
            client_id: "919935922047-m0vnc2jtb9bt3au0c3054lcrm9sjdfa5.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById('googleButton'),
            {theme: "outline", size: "large"});
    }, [])




    useEffect(() => {
        if(localStorage.token){
            setAuthToken(localStorage.token)}

        store.dispatch(loadUserDoc(), loadUserPharma()); }, [])




return(
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />

                    <section className="container">
                        <Alert />
                        <Routes>
                            <Route exact path="/" element={<Landing />} />
                            <Route path="docdash" element={<DocDash />} />
                            <Route path="pharmadash" element={<PharmaDash />} />
                            <Route path="whichreg" element={<WhichReg />} />
                            <Route path="registerdoc" element={<RegisterDoc />} />
                            <Route path="registerpharma" element={<RegisterPharma />} />
                            <Route path="whichlogin" element={<WhichLogin />} />
                            <Route path="logindoc" element={<LoginDoc />} />
                            <Route path="loginpharma" element={<LoginPharma />} />
                            {/*<Route path="loginpassword" element={<LoginPassword />} />*/}
                            <Route path="submit" element={<Submit />} />
                            <Route path="retrieve" element={<Retrieve />} />
                            <Route path="viewpresc" element={<ViewPresc />} />
                            <Route path="amend" element={<Amend />} />
                        </Routes>
                    </section>
                    <Footer />
                </Fragment>
            </Router>
        </Provider>
    )};




export default App;
