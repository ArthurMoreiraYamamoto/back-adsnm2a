const express = require('express');
const routerProdutos = require("./router")
const app = express();

app.use(routerProdutos);

app.listen(3000, () => {
    console.log("Api esta on!")
})

module.exports = app;
