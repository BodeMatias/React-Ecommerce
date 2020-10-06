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

const Item = (props) => {
    /*
    needed
    props.name 
    props.description
    props.imageURL


    image={"/static/images/cards/" + props.imageURL + ".jpg"}
    */

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

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={require("../../assets/descarga.jpg")}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="button-position">
                <Fab size="small" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab size="small" aria-label="like">
                    <FavoriteIcon color="secondary" />
                </Fab>
            </CardActions>
        </Card>
    );
};

export default Item;
