const router = new require("express").Router();
const UserModel = require("../models/User");


router.post("/addUser", async (req, res, next) => {
    console.log(req.body)
    const user = await UserModel.create(req.body)
    //console.log(user)
    res.json(user)
})


module.exports = router