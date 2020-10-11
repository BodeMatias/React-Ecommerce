import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import "./pedido.css";


const Pedido = (props) => {
    const [totalProduct, setTotalProduct] = useState(0)
    const [total, setTotal] = useState(0)
    const envio = 50

    useEffect(()=> {
        setTotal(envio + totalProduct)
        setTotalProduct(props.calcularTotal())
    }, [totalProduct, props, props.triggerChange])

    let calcularCantidad = () => {
        let quantity = 0
        props.cartItems.map(value => {
            quantity += value.quantity
        })
        return quantity;
    }

    return (
        <div className="pedido-container">
            <Card className="pedido-card">
                <CardContent>
                    <Typography className="pedido-cantidad">
                        {calcularCantidad()} PRODUCTOS
                    </Typography>
                    <div className="subtotal-pedido">
                        <Typography color="textPrimary">
                            Total del producto
                        </Typography>
                        <Typography color="textSecondary">{'$' + totalProduct}</Typography>
                    </div>
                    <Divider />
                    <div className="costo-pedido">
                        <Typography color="textPrimary">Envío</Typography>
                        <Typography color="textSecondary">{'$' + envio}</Typography>
                    </div>
                    <Divider />
                    <div className="total-pedido">
                        <Typography color="textPrimary">Total</Typography>
                        <Typography color="textPrimary">{'$' + total}</Typography>
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
