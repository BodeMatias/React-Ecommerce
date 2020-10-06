import React from "react";
import Item from "../item/Item";
import ItemLayout from "../itemslayout/ItemsLayout";

const StoreRoute = (props) => {
    return (
        <>
            <ItemLayout>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </ItemLayout>
        </>
    );
};

export default StoreRoute;
