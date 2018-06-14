import React from 'react';
import ReactDOM from 'react-dom';
import Jspang  from './jspang';
import Jspangb  from './jspangb';
import Jspangc  from './jspangc';
import Error  from './error';

import {BrowserRouter as Router , Route ,Switch,Redirect } from "react-router-dom";
import Nav from "./nav";
ReactDOM.render(
    //<Jspang/>,
    <Router>
        <div>
            <Nav/>
            <Route exact path="/" component={Jspang} />
            <Route  path="/Jspangb"  component={Jspangb} />
            <Route  path="/Jspangc"  component={Jspangc} />
            <Redirect from="/redirect" to="/Jspangb" />
            <Route  component={Error} />

        </div>
    </Router>,
    document.getElementById("app")
);