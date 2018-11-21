import React from 'react'
// import { Route, Redirect, Switch, Router } from 'react-router'
import Home from './containers/home/';
import Applet from './containers/applet'
import PosCharge from './containers/posCharge'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/applet" exact component={Applet} />
                <Route path="/posCharge" exact component={PosCharge} />
                <Redirect to="/" />
            </Switch>
        </HashRouter>


    )
}