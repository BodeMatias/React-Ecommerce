import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import Typography from "@material-ui/core/Typography";
import './storeroute.css'

const StoreRoute = (props) => {
    const [productList, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var response = await fetch("http://localhost:4200/products");
            var json = await response.json();
            setProducts(json);
        }
        fetchData();
    }, []);
    return (
        <div className="column">
            <Typography className="page-title" gutterBottom variant="h4">
                Tienda
            </Typography>
            <div className="flexlayout">
            {productList.map((value) => {
                    return (
                        <Item
                            name={value.name}
                            price={value.price}
                            url={value.url}
                            id={value.id}
                            quantity={value.quantity}
                            setCartItems={props.setCartItems}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default StoreRoute;
