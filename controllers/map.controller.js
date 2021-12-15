const db = require("../models");
const Map = db.map;

// Create and Save a new Map
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
   res.status(400).send({ message: "Content can not be empty!" });
   return;
 }

  const map = new Map({
    name: req.body.name,
    primaryStats: req.body.primaryStats,
    secondaryStats: req.body.secondaryStats,
    texture: req.body.texture,
    owner: req.body.owner,
    spells: req.body.spells
  });

 // Save Map in the database
 Map
   .save(map)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Project state."
     });
   });
};

// Retrieve all Maps from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Map.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving maps."
        });
      });
  };

// Find a single Map with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Map.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Map with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Map with id=" + id });
      });
  };

// Update a Map by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Map.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Map with id=${id}. Maybe Map was not found!`
          });
        } else res.send({ message: "Map was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Map with id=" + id
        });
      });
  };

// Delete a Map with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Map.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Map with id=${id}. Maybe Map was not found!`
          });
        } else {
          res.send({
            message: "Map was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Map with id=" + id
        });
      });
  };

// Delete all Maps from the database.
exports.deleteAll = (req, res) => {
    Map.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Maps were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all maps."
        });
      });
  };

// Find all published Maps
exports.findAllPublished = (req, res) => {
    Map.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving maps."
        });
      });
  };