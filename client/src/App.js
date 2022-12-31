import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import ViewingPane from "./components/layout/ViewingPane";
import Footer from "./components/layout/Footer";
import RegisterDoc from "./components/auth/RegisterDoc";
import RegisterPharma from "./components/auth/RegisterPharma";
import Login from "./components/auth/Login";
import LoginPassword from "./components/auth/LoginPassword";
import WhichReg from "./components/auth/WhichReg";
import Submit from "./components/layout/Submit";
import Retrieve from "./components/layout/Retrieve";
import ViewPresc from "./components/layout/ViewPresc";
import Amend from "./components/layout/Amend";
import Alert from "./components/layout/Alert";
import { loadUser } from "./actions/auth";
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



    useEffect(() => {
        if(localStorage.token){
            setAuthToken(localStorage.token)}

        store.dispatch(loadUser()); }, []);


    return(
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />

                    <section className="container">
                        <Alert />
                        <Routes>
                            <Route exact path="/" element={<Landing />} />
                            <Route path="whichreg" element={<WhichReg />} />
                            <Route path="registerdoc" element={<RegisterDoc />} />
                            <Route path="registerpharma" element={<RegisterPharma />} />
                            <Route path="login" element={<Login />} />
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
