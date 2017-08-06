var db = require("../models");


module.exports = function(app) {

app.get("/", function(req, res) {
	db.Burger.findAll({}).then(function(dbBurger) {
    res.render("index", { burgers: dbBurger });
    //res.json(dbBurger);
  })
});

app.post("/", function(req, res) {
	console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burger.create({
      burger_name: req.body.burger,
      devoured: false
    }).then(function() {
      // We have access to the new todo as an argument inside of the callback function
	 return res.redirect("/");
    });
});

 app.delete("/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
	 return res.redirect("/");
    });
  });
  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/:id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
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

//app.put("/", function(req, res) {
//  burgers.updateOne("", function(){
//    return res.redirect("/");
//  })
//});