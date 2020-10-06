import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import StoreRoute from "./components/storeroute/StoreRoute";
import CartRoute from "./components/cartroute/CartRoute";
import Layout from "./components/layout/Layout";

const App = () => {
    return (
        <div>
            <Navbar />
            <Layout>
                <StoreRoute />
                <CartRoute />
            </Layout>
        </div>
    );
};

export default App;
