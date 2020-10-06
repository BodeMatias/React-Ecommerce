import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import "./pedido.css";

const Pedido = (props) => {
    return (
        <div className="pedido-container">
            <Card className="pedido-card">
                <CardContent>
                    <Typography className="pedido-cantidad">
                        4 PRODUCTOS
                    </Typography>
                    <div className="subtotal-pedido">
                        <Typography color="textPrimary">
                            Total del producto
                        </Typography>
                        <Typography color="textSecondary">$4200000</Typography>
                    </div>
                    <Divider />
                    <div className="costo-pedido">
                        <Typography color="textPrimary">Envío</Typography>
                        <Typography color="textSecondary">$50</Typography>
                    </div>
                    <Divider />
                    <div className="total-pedido">
                        <Typography color="textPrimary">Total</Typography>
                        <Typography color="textPrimary">$4200050</Typography>
                    </div>
                </CardContent>
                <CardActions className="pedido-btn">
                    <Button size="medium" color="primary">
                        Continuar
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Pedido;
