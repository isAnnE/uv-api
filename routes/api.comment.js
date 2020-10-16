const router = new require("express").Router();
const CommentModel = require("../models/Comment");

// GET
router.get("/", async (req, res, next) => {
    try {
        const comments = await CommentModel.find();
        res.json(comments);
    } catch (err) {
        next(err);
    }
});

// GET by ID
router.get("/:id", async (req, res, next) => {
    try {
        const commentID = await CommentModel.findById(req.params.id);
        res.json(commentID);
    } catch (err) {
        next(err);
    }
});

// POST

router.post("/", async (req, res, next) => {
    try {
        const newComment = await CommentModel.create(req.body);
        res.json(newComment);
    } catch (err) {
        next(err);
    }
});

// PATCH - UPDATE by id: 
router.patch("/:id", async (req, res, next) => {
    try {
        const updatedComment = await CommentModel.findByIdAndUpdate(
            req.params.id, // req.params.id = l'id passé en URL
            req.body, // données de mise à jour
            {
                new: true
            } // permet de récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
        );
        res.json(updatedComment);
    } catch (err) {
        next(err);
    }
});


// DELETE by id:
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedComment = await CommentModel.findByIdAndDelete(req.params.id); // req.params.id = l'id passé en URL
        res.json(deletedComment);
    } catch (err) {
        next(err);
    }
});

module.exports = router;