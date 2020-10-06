import React from "react";
import CartItem from "../cartitem/CartItem";
import CartLayout from "../cartlayout/CartLayout";

const CartRoute = () => {
    return (
        <>
            <CartLayout>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </CartLayout>
        </>
    );
};

export default CartRoute;
