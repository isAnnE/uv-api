const router = new require("express").Router();
const JobModel = require("../models/Job");

router.get("/", async (req, res, next) => {
    try {
        const jobs = await JobModel.find();
        res.json(jobs);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const JobID = await JobModel.findById(req.params.id);
        res.json(JobID);
    } catch (err) {
        next(err);
    }
});


module.exports = router;