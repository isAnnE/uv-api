const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    username_name: String,
    last_name: String,
    email: String,
    photo: {
        type: String,
        default: "https://res.cloudinary.com/dol6lso5o/image/upload/v1602752712/uv/docuovidie_a4o76c.jpg",
    },
    password: String,
    // role: {
    //     type: String,
    //     enum: ["admin", "user"],
    //     default: "user",
    // },

    is_admin: {
        type: Boolean,
        default: "false",
    },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;