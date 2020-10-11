const express = require("express");
const app = express();
const cors = require("cors");
const MiniSearch = require('minisearch')
const port = 4200;

var products = [
    {
        id: 1,
        name: "test1",
        description: "gjdf;gljsdfklgjsdlkfgjsldk",
        price: 420,
        url: "descarga.jpg",
        quantity: 1
    },
    {
        id: 2,
        name: "test2",
        description: "asdfadfdfasdfadsfasdfasdfasdfasdfsdfasfd",
        price: 420,
        url: "descarga2.jpg",
        quantity: 1
    },
    {
        id: 3,
        name: "test3",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 420,
        url: "descarga3.jpg",
        quantity: 1
    },

    {
        id: 4,
        name: "test3",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 420,
        url: "descarga3.jpg",
        quantity: 1
    },

    {
        id: 5,
        name: "test3",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 420,
        url: "descarga3.jpg",
        quantity: 1
    },

    {
        id: 6,
        name: "test3",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 420,
        url: "descarga3.jpg",
        quantity: 1
    },

    {
        id: 7,
        name: "otronombre",
        description:
            "fghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfghjfgjfghjfghjfgk",
        price: 32,
        url: "descarga3.jpg",
        quantity: 1
    },
];

app.use(cors());
app.get("/products", (req, res) => res.json(products));

app.get("/search/:name", (req, res) => {
    let search = new MiniSearch({
        fields: ['name'],
        storeFields: ['id', 'name', 'description', 'price', 'url', 'quantity']
    })
    search.addAll(products)
    let results = search.search(req.params.name, { prefix: true })
    res.json(results)
})
app.listen(port, () => console.log(`Example app listening on port port!`));
