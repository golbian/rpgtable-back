const maps = require("../controllers/map.controller.js");
const { authJwt } = require("../middlewares");

module.exports = app => {
  
    var router = require("express").Router();
  
    // Create a new Map
    // router.post("/", [authJwt.verifyToken], maps.create);
  
    // Retrieve all Maps
    // router.get("/", [authJwt.verifyToken, authJwt.isAdmin], maps.findAll);
  
    // // Retrieve all published Maps
    // router.get("/published", [authJwt.verifyToken], maps.findAllPublished);
  
    // // Retrieve a single Map with id
    // router.get("/:id", [authJwt.verifyToken], maps.findOne);
  
    // // Update a Map with id
    // router.put("/:id",[authJwt.verifyToken, authJwt.isAdmin], maps.update);
  
    // // Delete a Map with id
    // router.delete("/:id", [authJwt.verifyToken], maps.delete);
  
    // // Create a new Map
    // router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], maps.deleteAll);
  
    app.use('/api/maps', router);
  };