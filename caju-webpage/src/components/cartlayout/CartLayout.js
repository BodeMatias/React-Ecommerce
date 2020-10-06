import React from "react";
import Typography from "@material-ui/core/Typography";
import "./cartlayout.css";

import Pedido from "../pedido/Pedido";
const CartLayout = (props) => {
    return (
        <div className="cart-centered">
            <div className="cart-column">
                <Typography
                    className="cart-page-title"
                    gutterBottom
                    variant="h4"
                >
                    Carrito
                </Typography>
                <div className="cart-flexlayout">{props.children}</div>
            </div>
            <div className="cart-pedido">
                <Pedido />
            </div>
        </div>
    );
};

export default CartLayout;
