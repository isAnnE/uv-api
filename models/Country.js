const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const countrySchema = new Schema({
    label: String,
});

const CountryModel = mongoose.model("Country", countrySchema);

module.exports = CountryModel;