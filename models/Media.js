const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
    name: String,
    year: Number,
    intro: String,
    country: String,
    genre: String,
    extract: String,
    photo: {
        url: {
            type: String,
            default: "AJOUTER",
        }
    },
    directed_by: String,
    written_by: String,
    produced_by: String,
    acting: String,
    media_type: {
        type: String,
        enum: ["Film", "Serie", "Documentaire"],
    },
});

const MediaModel = mongoose.model("Media", mediaSchema);

module.exports = MediaModel;