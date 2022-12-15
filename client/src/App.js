import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import ViewingPane from "./components/layout/ViewingPane";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";


import '././App.css';

const App = () => (
    <Router>
    <Fragment>
        <Navbar />
        <Landing />
        <section className="container">
            <Routes>
                <Route exact path="/" element={ViewingPane} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </Routes>
        </section>
        <Footer />
    </Fragment>
    </Router>
);



export default App;
