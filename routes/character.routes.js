const characters = require("../controllers/character.controller.js");
const { authJwt } = require("../middlewares");

module.exports = app => {
  
    var router = require("express").Router();
  
    //Create a new character
    router.post("/", [authJwt.verifyToken], characters.create);
  
    // Retrieve all Characters
    router.get("/", [authJwt.verifyToken, authJwt.isAdmin], characters.findAll);
  
    // Retrieve all published Characters
    router.get("/published", [authJwt.verifyToken], characters.findAllPublished);
  
    // Retrieve a single Character with id
    router.get("/:id", [authJwt.verifyToken], characters.findOne);
  
    // Update a Character with id
    router.put("/:id", [authJwt.verifyToken], characters.update);
  
    // Delete a Character with id
    router.delete("/:id", [authJwt.verifyToken], characters.delete);
  
    // Create a new Character
    router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], characters.deleteAll);
  
    app.use('/api/characters', router);
  };