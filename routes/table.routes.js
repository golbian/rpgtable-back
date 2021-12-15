module.exports = app => {
    const tables = require("../controllers/table.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Table
    // router.post("/", tables.create);
  
    // Retrieve all Tables
    // router.get("/", tables.findAll);
  
    // // Retrieve all published Tables
    // router.get("/published", tables.findAllPublished);
  
    // // Retrieve a single Table with id
    // router.get("/:id", tables.findOne);
  
    // // Update a Table with id
    // router.put("/:id", tables.update);
  
    // // Delete a Table with id
    // router.delete("/:id", tables.delete);
  
    // // Create a new Table
    // router.delete("/", tables.deleteAll);
  
    app.use('/api/tables', router);
  };