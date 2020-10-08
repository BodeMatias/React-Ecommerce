import React from "react";
import CartItem from "../cartitem/CartItem";
import "./layout.css";

const Layout = (props) => {
    return <div className="main-container">{props.children}</div>;
};

export default Layout;
