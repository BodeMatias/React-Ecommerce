import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from '@material-ui/core/Tooltip';
import "./item.css";
import Cookies from "js-cookie";

const Item = (props) => {
    const useStyles = makeStyles({
        root: {
            width: 180,
            margin: 5,
        },
        media: {
            height: 150,
        },
    });

    const classes = useStyles();

    var url = require("../../assets/" + props.url);


    function handleClick() {
        var unparsedCookie = Cookies.get("cart");
        if (unparsedCookie === undefined) {
            unparsedCookie = "[]";
        }
        var parsedCookie = JSON.parse(unparsedCookie);
        if(contains(parsedCookie)){
            parsedCookie.map(value => {
                if(value.id === props.id && value.quantity !== 10){
                    value.quantity++
                    document.getElementById(props.id).value = value.quantity
                }
            })
        } else {
            parsedCookie.push({
                name: props.name,
                price: props.price,
                url: props.url,
                id: props.id,
                quantity: props.quantity
            });
        }
        props.setCartItems(parsedCookie)
        Cookies.set("cart", parsedCookie);
        
        console.log(parsedCookie)
    }

    let contains = (list) => {
        for(let k in list){
            if(list[k]['id'] === props.id) return true
        }
        return false
    }

    return (
        <Card className={classes.root}>
            <CardActionArea className="card-area">
                <CardMedia className={classes.media} image={url} />
                <CardContent>
                    <Typography
                        className="item-name"
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        {props.name}
                    </Typography>
                    <Typography
                        className="item-price"
                        variant="h6"
                        component="h3"
                        color="textSecondary"
                    >
                        {"$" + props.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
            <CardActions className="button-position">
                <Tooltip title="Agregar al carrito">
                    <Fab
                        onClick={handleClick}
                        size="small"
                        color="primary"
                        aria-label="add"
                    >
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

export default Item;
