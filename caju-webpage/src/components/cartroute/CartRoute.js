import React, { useState, useEffect } from "react";
import CartItem from "../cartitem/CartItem";
import Pedido from '../pedido/Pedido';
import Typography from "@material-ui/core/Typography";
import './cartroute.css';

const CartRoute = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [triggerChange, setTrigger] = useState(0)

    useEffect(() => {
       setCartItems(props.cartItems);
    }, [props.cartItems]);

    let calcularTotal = () => {
        let sum = 0
        cartItems.map(value => {
            sum += (value.price * value.quantity)
        })
        return sum
    }

    return (
        <>
            <div className="cart-centered">
                <div className="cart-column">
                    <Typography
                        className="cart-page-title"
                        gutterBottom
                        variant="h4"
                    >
                        Carrito
                    </Typography>
                    <div className="cart-flexlayout">
                    {cartItems.map((value) => {
                        return (
                            <CartItem
                                name={value.name}
                                price={value.price}
                                url={value.url}
                                id={value.id}
                                quantity={value.quantity}
                                setCartItems={setCartItems}
                                cartItems={cartItems}
                                setTrigger={setTrigger}
                            />
                        );
                    })}
                    </div>
                </div>
                <div className="cart-pedido">
                    <Pedido cartItems={cartItems} calcularTotal={calcularTotal} triggerChange={triggerChange}/>
                </div>
            </div>
        </>
    );
};

export default CartRoute;
