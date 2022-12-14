import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/layout/Navbar";
import ViewingPane from "./components/layout/ViewingPane";
import Footer from "./components/layout/Footer";

import '././App.css';

const App = () => (
    <Fragment>
        <Navbar />
        <ViewingPane />
        <Footer />

    </Fragment>
);



export default App;
