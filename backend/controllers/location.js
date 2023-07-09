const router = require("express").Router();
const db = require("../models");

//find all locations
router.get("/", (req, res) => {
  db.Location.find()
    .then((locations) => res.json(locations))
    .catch((err) =>
      res.status(404).json({ locationsfound: "No Locations Found" })
    );
});

router.get("/:id", (req, res) => {
  db.Location.findById(req.params.id)
    .then((location) => res.json(location))
    .catch((err) =>
      res.status(404).json({ locationsfound: "No Locations Found" })
    );
});

router.post("/", (req, res) => {
  db.Location.create(req.body).then((location) =>
    res.json({ message: "Location added successfully" })
  );
});

module.exports = router;
