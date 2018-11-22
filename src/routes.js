import React from 'react'
// import { Route, Redirect, Switch, Router } from 'react-router'
import Home from './containers/home/';
import Applet from './containers/applet'
import PosCharge from './containers/posCharge'
import ContactUs from './containers/contactUs'
import AboutUs from './containers/aboutUs'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'


export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/applet" exact component={Applet} />
                <Route path="/posCharge" exact component={PosCharge} />
                <Route path="/contactUs" exact component={ContactUs} />
                <Route path="/aboutUs" exact component={AboutUs} />
                <Redirect to="/" />
            </Switch>
        </HashRouter>


    )
}