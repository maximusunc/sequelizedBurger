var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burgers-routes.js")(app);
require("./routes/customers-routes.js")(app);


db.sequelize.sync().then(function() {
	app.listen(port, function() {
		console.log("Listening on port: " + port);
	});
});
