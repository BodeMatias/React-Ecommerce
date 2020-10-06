import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import StoreRoute from "./components/storeroute/StoreRoute";
import CartItem from "./components/cartitem/CartItem";
import CartLayout from "./components/cartlayout/CartLayout";

/*
<StoreRoute />
*/

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <CartLayout>
                <CartItem />
                <CartItem />
                <CartItem />
            </CartLayout>
        </div>
    );
};

export default App;
