import React, {useState, useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import Cookies from 'js-cookie';
import "./cartitem.css";

const CartItem = (props) => {
    const [totalParcial, setTotal] = useState(0)
    const num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var url = require("../../assets/" + props.url);

    useEffect(() => 
        setTotal(props.price*props.quantity)
    ,[props.price, props.quantity])

    var handlerSelect = (event) => {
        var cartList = props.cartItems
        cartList.map(value => {
            if(value.id === props.id){
                value.quantity = parseInt(event.target.value) 
                setTotal(value.price * value.quantity)  
                var unparsedCookie = Cookies.get("cart");
                if (unparsedCookie === undefined) {
                    unparsedCookie = "[]";
                }
                var parsedCookie = JSON.parse(unparsedCookie);
                parsedCookie.map(val => {
                    if(val.id === props.id){
                        val.quantity = parseInt(event.target.value)
                    }
                })
                Cookies.set("cart", parsedCookie)
            }
        })
        props.setCartItems(cartList)
        props.setTrigger(prev => prev + 1)
    }

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
                    <CardContent className="align-text">
                        <Typography
                            component="h6"
                            variant="h6"
                            color="textSecondary"
                        >
                            ${props.price}
                        </Typography>
                    </CardContent>
                    <CardContent className="align-text">
                        <Typography
                            variant="subtitle2"
                            color="textPrimary"
                        >
                            x
                        </Typography>
                    </CardContent>
                    <CardContent className="align-text">
                        <FormControl>
                            <Select id={props.id} onChange={handlerSelect} native defaultValue={props.quantity}>
                                {num_array.map((value, index) => {
                                    return (
                                        <option value={value}>{value}</option>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </CardContent>
                    <CardContent className="align-text">
                        <Typography
                            component="h6"
                            variant="h6"
                            color="textSecondary"
                        >{'$' + totalParcial}</Typography>
                    </CardContent>
                    <div></div>
                </div>
            </Card>
        </div>
    );
};

export default CartItem;
