const router = new require("express").Router();
const ArticleModel = require("../models/Article");

// GET
router.get("/", async (req, res, next) => {
    try {
        const articles = await ArticleModel.find();
        res.json(articles);
    } catch (err) {
        next(err);
    }
});

// GET by ID
router.get("/:id", async (req, res, next) => {
    try {
        const articleID = await ArticleModel.findById(req.params.id);
        res.json(articleID);
    } catch (err) {
        next(err);
    }
});

// POST

router.post("/", async (req, res, next) => {
    try {
        const newArticle = await ArticleModel.create(req.body);
        res.json(newArticle);
    } catch (err) {
        next(err);
    }
});

// PATCH - UPDATE by id: 
router.patch("/:id", async (req, res, next) => {
    try {
        const updatedArticle = await ArticleModel.findByIdAndUpdate(
            req.params.id, // req.params.id = l'id passé en URL
            req.body, // données de mise à jour
            {
                new: true
            } // permet de récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
        );
        res.json(updatedArticle);
    } catch (err) {
        next(err);
    }
});


// DELETE by id:
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedArticle = await ArticleModel.findByIdAndDelete(req.params.id); // req.params.id = l'id passé en URL
        res.json(deletedArticle);
    } catch (err) {
        next(err);
    }
});

module.exports = router;