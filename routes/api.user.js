// var express = require('express');
// var router = express.Router();
const router = new require("express").Router();
const UserModel = require("../models/User");

// GET
router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET by ID

router.get("/:id", async (req, res, next) => {
  try {
    const usersID = await UserModel.findById(req.params.id);
    res.json(usersID);
  } catch (err) {
    next(err);
  }
});

// POST

router.post("/", async (req, res, next) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

// PATCH - UPDATE by id: 
router.patch("/:id", async (req, res, next) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id, // req.params.id = l'id passé en URL
      req.body, // données de mise à jour
      {
        new: true
      } // permet de récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
    );
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});


// DELETE by id:
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id); // req.params.id = l'id passé en URL
    res.json(deletedUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;