import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import StoreRoute from "./components/storeroute/StoreRoute";
import CartRoute from "./components/cartroute/CartRoute";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

/*
<StoreRoute />
*/

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Redirect from="/" to="/home" />
                <Switch>
                    <Route path="/home" component={StoreRoute} />
                    <Route path="/cart" component={CartRoute} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
