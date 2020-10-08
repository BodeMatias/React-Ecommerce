const express = require("express");
const app = express();
const cors = require("cors");
const port = 4200;

var products = [
    {
        id: 1,
        name: "test1",
        description: "gjdf;gljsdfklgjsdlkfgjsldk",
        price: 420,
        url: "descarga.jpg",
    },
    {
        id: 2,
        name: "test2",
        description: "asdfadfdfasdfadsfasdfasdfasdfasdfsdfasfd",
        price: 420,
        url: "descarga2.jpg",
    },
    {
        id: 3,
        name: "test3",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 420,
        url: "descarga3.jpg",
    },

    {
        id: 3,
        name: "test3",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 420,
        url: "descarga3.jpg",
    },

    {
        id: 3,
        name: "test3",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 420,
        url: "descarga3.jpg",
    },

    {
        id: 3,
        name: "test3",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 420,
        url: "descarga3.jpg",
    },

    {
        id: 3,
        name: "test3",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 420,
        url: "descarga3.jpg",
    },
];
app.use(cors());
app.get("/products", (req, res) => res.json(products));
app.listen(port, () => console.log(`Example app listening on port port!`));
