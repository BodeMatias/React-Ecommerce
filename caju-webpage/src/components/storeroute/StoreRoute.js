import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import ItemLayout from "../itemslayout/ItemsLayout";

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
        <ItemLayout>
            {productList.map((value) => {
                return (
                    <Item
                        name={value.name}
                        price={value.price}
                        url={value.url}
                    />
                );
            })}
        </ItemLayout>
    );
};

export default StoreRoute;
