const express = require("express");
const forest = require("../models/forest.js");
const router = express.Router();

router.get("/", function (req, res) {

    // call the model method that gets all the plans
    forest.all(function (err, data) {

        if (err) { return res.status(500).end(); }

        res.render("index", { trees: data });
    });
});


router.post("/forest", function (req, res) {
    forest.create(req.body.tree, function (err, data) {

        if (err) {
            return res.status(500).end();
        }

        console.log(res.json)
        res.json({
            id: data.insertId
        });

    })
});


router.put("/forest/planted", function (req, res) {
    console.log(req.body)
    
    forest.update(req.body.id, function (err, data) {

        console.log(data)
        if (err) { return res.status(500).end() }

        if (data.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }

        res.status(200).end();
    })

});


module.exports = router;