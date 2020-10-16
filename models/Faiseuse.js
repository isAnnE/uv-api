const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const faiseuseSchema = new Schema({
    first_name: String,
    last_name: String,
    birth_date: Date,
    job: String,
    photo: {
        url: {
            type: String,
            default: "AJOUTER",
        }
    },

    //QUESTION GUILLAUME --> ça donne quoi s'il y en a plusieurs ? 
    media: {
        type: Schema.Types.ObjectId,
        ref: "Media",
    },
});

const FaiseuseModel = mongoose.model("Faiseuse", faiseuseSchema);

module.exports = FaiseuseModel;