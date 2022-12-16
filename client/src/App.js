import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import ViewingPane from "./components/layout/ViewingPane";
import Footer from "./components/layout/Footer";
import RegisterDoc from "./components/auth/RegisterDoc";
import RegisterPharma from "./components/auth/RegisterPharma";
import Login from "./components/auth/Login";
import WhichReg from "./components/auth/WhichReg";


import '././App.css';

const App = () => (
    <Router>
    <Fragment>
        <Navbar />

        <section className="container">
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route path="whichreg" element={<WhichReg />} />
                <Route path="registerdoc" element={<RegisterDoc />} />
                <Route path="registerpharma" element={<RegisterPharma />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </section>
        <Footer />
    </Fragment>
    </Router>
);



export default App;
