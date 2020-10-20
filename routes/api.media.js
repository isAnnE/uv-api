const router = new require("express").Router(); // creates new router function to handle new object
const MediaModel = require("../models/Media");

// GET
router.get("/", async (req, res, next) => {
    try {
        const media = await MediaModel.find({
            media_type: req.query.mediaType
        });
        console.log("Media : ", media)
        res.json(media);
    } catch (err) {
        next(err);
    }
});

// GET by ID
router.get("/:id", async (req, res, next) => {
    try {
        const mediaID = await MediaModel.findById(req.params.id);
        res.json(mediaID);
    } catch (err) {
        next(err);
    }
});


// POST

router.post("/", async (req, res, next) => {
    try {
        const newMedia = await MediaModel.create(req.body);
        res.json(newMedia);
    } catch (err) {
        next(err);
    }
});

// PATCH - UPDATE by id: 
router.patch("/:id", async (req, res, next) => {
    console.log("REQ.BODY >>>>", req.body);
    try {
        const updatedMedia = await MediaModel.findByIdAndUpdate(
            req.params.id, // req.params.id = l'id passé en URL
            req.body, // données de mise à jour
            {
                new: true
            } // permet de récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
        );
        res.json(updatedMedia);
    } catch (err) {
        next(err);
    }
});


// DELETE by id:
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedMedia = await MediaModel.findByIdAndDelete(req.params.id); // req.params.id = l'id passé en URL
        res.json(deletedMedia);
    } catch (err) {
        next(err);
    }
});

module.exports = router;