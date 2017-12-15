var db = require("../models");


module.exports = function(app) {
	app.get("/", function(req, res) {
		db.Burger.findAll().then(function(data) {
			var burgerObj = {
				burger: data
			};
			res.render("index", burgerObj);
		});
    });
    
    app.post("/api/burgers", function(req, res) {
        var burgerName = req.body.burger;
        db.Burger.create({
            burger_name: burgerName
         }).then(function(data) {
            res.json(data);
        });
    });

    app.put("/api/burgers/:id", function(req, res) {
        var id = req.params.id;
        db.sequelize.query("UPDATE Burgers SET devoured = !devoured WHERE id = " + id).spread((results, metadata) => {
            res.json(results);
        });
    });

    app.delete("/api/burgers/:id", function(req, res) {
        var id = req.params.id;
        db.Burger.destroy({
            where: {
                id: id
            }
        }).then(function(data) {
            res.json(data);
        });    
    });
};