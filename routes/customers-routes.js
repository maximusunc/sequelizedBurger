var db = require("../models");

module.exports = function(app) {
    app.post("/api/customer/:name", function(req, res) {
        var name = req.params.name;
        db.Customer.create({
            name: name,
            include: {
                model: db.Burger
            }
        }).then(function(data) {
            res.json(data);
        });
    });
}