const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (result) {
        var list = { burgers: result };
        res.render("index", list);
    });
});

// Post method for Burger App
router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        ["burger_name"],
        [req.body.burger_name], function (result) {
            res.json({ id: result.insertId });
        });
});

// Update method for Burger App
router.put("/api/burgers/:id", function (req, res) {
    const updateBurgerId = "id=" + req.params.id;
    burger.updateOne(
        {
            devoured: req.body.devoured
        }, updateBurgerId, function (result) {

            if (result.changedRow == 0) {
                return res.status(404).end()
            }
            res.status(200).end();
        });
});

module.exports = router;