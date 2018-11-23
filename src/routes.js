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
                <Route path="/applet"  component={Applet} />
                <Route path="/posCharge"  component={PosCharge} />
                <Route path="/contactUs"  component={ContactUs} />
                <Route path="/aboutUs"  component={AboutUs} />
                <Redirect to="/" />
            </Switch>
        </HashRouter>
    )
}