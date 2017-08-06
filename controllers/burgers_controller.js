var db = require("../models");


module.exports = function(app) {

app.get("/", function(req, res) {
	db.Burger.findAll({}).then(function(dbBurger) {
    res.render("index", { burgers: dbBurger });
  })
});

app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger,
      devoured: false
    }).then(function(err) {
	 return res.redirect("/");
    });
});

  app.put("/:id", function(req, res) {
    db.Burger.update({
      devoured: true,
    }, {
      where: {
        id: req.body.id
      }
    }).then(function() {
	 return res.redirect("/");
    });
  });

};