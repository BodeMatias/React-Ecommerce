import React, { useState } from "react";
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
                <Fab
                    onClick={() => {
                        var unparsedCookie = Cookies.get("cart");
                        if (unparsedCookie === undefined) {
                            unparsedCookie = "[]";
                        }
                        var parsedCookie = JSON.parse(unparsedCookie);

                        parsedCookie.push({
                            name: props.name,
                            price: props.price,
                            url: props.url,
                        });
                        Cookies.set("cart", parsedCookie);
                        window.location.reload(false);
                    }}
                    size="small"
                    color="primary"
                    aria-label="add"
                >
                    <AddIcon />
                </Fab>
                <Fab onClick="" size="small" aria-label="like">
                    <FavoriteIcon color="secondary" />
                </Fab>
            </CardActions>
        </Card>
    );
};

export default Item;
