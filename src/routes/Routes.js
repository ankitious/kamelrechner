import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../components/home/Home";
import Result from "../components/result/Result";


const Routes = () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/result" component={Result} />
        <Route component={Home} />
    </Switch>;

export default Routes;
