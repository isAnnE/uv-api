const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    title: String,
    subtitle: String,
    publi_date: Date,
    text: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
    },
    photo: {
        url: {
            type: String,
            default: "AJOUTER",
        }
    },

});

const ArticleModel = mongoose.model("Article", articleSchema);

module.exports = ArticleModel;