import React from "react";
import Typography from "@material-ui/core/Typography";
import "./itemlayout.css";
const ItemLayout = (props) => {
    return (
        <div className="column">
            <Typography className="page-title" gutterBottom variant="h4">
                Tienda
            </Typography>
            <div className="flexlayout">{props.children}</div>
        </div>
    );
};

export default ItemLayout;
