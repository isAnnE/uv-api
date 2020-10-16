const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    publi_date: Date,
    text: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    id_ressource: {
        id_media: {
            type: Schema.Types.ObjectId,
            ref: "Media"
        },
        id_article: {
            type: Schema.Types.ObjectId,
            ref: "Article"
        },
    },


    comment_type: {
        type: String,
        enum: ["Media", "Article"],
    },

});

const CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;