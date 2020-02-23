import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../commons/NotFound';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Redirect404 from './Redirect404';

export const Routes = function () {
    console.log("Main ")
    return (
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="/" to="/dashboard" exact />
            <Route component={Redirect404} />
        </Switch>
    )
}