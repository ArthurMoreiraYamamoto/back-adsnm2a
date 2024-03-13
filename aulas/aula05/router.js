const express = require('express');

const router = express.Router();

router.get("/produtos", (req,res) => {
    res.json([]);
});

router.get("/produtos/:produtoId", (req, res) => {
    if (req.params.produtoId == 10000) {
        res.status(404).json({msg: "Produto não encontrado"});
        return;
    }
    res.json({});
});

module.exports = router;