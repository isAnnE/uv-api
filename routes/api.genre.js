const router = new require("express").Router();
const GenreModel = require("../models/Genre");

router.get("/", async (req, res, next) => {
    try {
        const genres = await GenreModel.find();
        res.json(genres);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const genreID = await GenreModel.findById(req.params.id);
        res.json(genreID);
    } catch (err) {
        next(err);
    }
});


module.exports = router;