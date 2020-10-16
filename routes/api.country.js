const router = new require("express").Router();
const CountryModel = require("../models/Country");

router.get("/", async (req, res, next) => {
    try {
        const countries = await CountryModel.find();
        res.json(countries);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const countryID = await CountryModel.findById(req.params.id);
        res.json(countryID);
    } catch (err) {
        next(err);
    }
});


module.exports = router;