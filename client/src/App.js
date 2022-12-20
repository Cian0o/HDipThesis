import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import ViewingPane from "./components/layout/ViewingPane";
import Footer from "./components/layout/Footer";
import RegisterDoc from "./components/auth/RegisterDoc";
import RegisterPharma from "./components/auth/RegisterPharma";
import LoginEmail from "./components/auth/LoginEmail";
import LoginPassword from "./components/auth/LoginPassword";
import WhichReg from "./components/auth/WhichReg";
import Submit from "./components/layout/Submit";
import Retrieve from "./components/layout/Retrieve";
import Amend from "./components/layout/Amend";
import Alert from "./components/layout/Alert";

import {Provider} from 'react-redux';
import store from './store';


import '././App.css';

const App = () => (
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
                <Route path="loginemail" element={<LoginEmail />} />
                <Route path="loginpassword" element={<LoginPassword />} />
                <Route path="submit" element={<Submit />} />
                <Route path="retrieve" element={<Retrieve />} />
                <Route path="amend" element={<Amend />} />
            </Routes>
        </section>
        <Footer />
    </Fragment>
    </Router>
    </Provider>
);



export default App;
