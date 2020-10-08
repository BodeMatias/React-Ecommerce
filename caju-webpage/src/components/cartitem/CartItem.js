import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import "./cartitem.css";

const CartItem = (props) => {
    const num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var url = require("../../assets/" + props.url);

    return (
        <div className="card-container">
            <Card className="card-main">
                <div className="card-details">
                    <div className="card-image-holder">
                        <CardMedia className="card-image" image={url} />
                    </div>
                    <div className="card-details-holder">
                        <CardContent className="">
                            <Typography component="h5" variant="h5">
                                {props.name}
                            </Typography>
                        </CardContent>
                    </div>
                </div>
                <Divider variant="middle" />
                <div className="card-footer">
                    <CardContent className="">
                        <Typography
                            component="h6"
                            variant="h6"
                            color="textSecondary"
                        >
                            ${props.price}
                        </Typography>
                    </CardContent>
                    <CardContent className="">
                        <FormControl>
                            <Select native defaultValue="">
                                {num_array.map((value, index) => {
                                    return (
                                        <option value={value}>{value}</option>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </CardContent>
                    <CardContent className="">
                        <Typography
                            component="h6"
                            variant="h6"
                            color="textSecondary"
                        ></Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default CartItem;
