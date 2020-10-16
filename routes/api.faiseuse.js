const router = new require("express").Router();
const FaiseuseModel = require("../models/Faiseuse");

// GET
router.get("/", async (req, res, next) => {
    try {
        const faiseuses = await FaiseuseModel.find();
        res.json(faiseuses);
    } catch (err) {
        next(err);
    }
});

// GET by ID 

router.get("/:id", async (req, res, next) => {
    try {
        const faiseuseID = await FaiseuseModel.findById(req.params.id);
        res.json(faiseuseID);
    } catch (err) {
        next(err);
    }
});

// POST

router.post("/", async (req, res, next) => {
    try {
        const newFaiseuse = await FaiseuseModel.create(req.body);
        res.json(newFaiseuse);
    } catch (err) {
        next(err);
    }
});

// PATCH - UPDATE by id: 
router.patch("/:id", async (req, res, next) => {
    try {
        const updatedFaiseuse = await FaiseuseModel.findByIdAndUpdate(
            req.params.id, //récuperer id via url
            req.body, // données de mise à jour
            {
                new: true
            } // permet de récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
        );
        res.json(updatedFaiseuse);
    } catch (err) {
        next(err);
    }
});


// DELETE by id:
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedFaiseuse = await FaiseuseModel.findByIdAndDelete(req.params.id); // req.params.id = l'id passé en URL
        res.json(deletedFaiseuse);
    } catch (err) {
        next(err);
    }
});

module.exports = router;