import React, { useState, useEffect } from "react";
import CartItem from "../cartitem/CartItem";
import CartLayout from "../cartlayout/CartLayout";
import Cookies from "js-cookie";

const CartRoute = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        var unparsedCookie = Cookies.get("cart");
        if (unparsedCookie === undefined) {
            unparsedCookie = "[]";
        }
        var parsedCookie = JSON.parse(unparsedCookie);

        setCartItems(parsedCookie);
    }, []);
    return (
        <>
            <CartLayout>
                {cartItems.map((value) => {
                    return (
                        <CartItem
                            name={value.name}
                            price={value.price}
                            url={value.url}
                        />
                    );
                })}
            </CartLayout>
        </>
    );
};

export default CartRoute;
