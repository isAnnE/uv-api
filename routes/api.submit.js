const router = new require("express").Router();
const nodemailer = require("nodemailer");
const mail_host = "smtp.mailtrap.io";
const mail_host_port = 2525;
const mail_user_address = "95ad386ffe-f065d1@inbox.mailtrap.io";
const mail_user_name = "7ae812203317b3";
const mail_user_pass = "f8476c6c8b0b9f";


// async..await is not allowed in global scope, must use a wrapper
async function sendMail(infos) {
    // objet "transporter" qui utilise le smtp 
    let transporter = nodemailer.createTransport({
        host: mail_host,
        port: mail_host_port,
        secure: false, // true for 465, false for other ports
        auth: {
            user: mail_user_name, // generated ethereal user
            pass: mail_user_pass, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: `👻 ${infos.from} 👻`, // sender address
        to: mail_user_address, // list of receivers
        subject: infos.subject, // Subject line
        text: infos.message, // plain text body
        html: `<div>${infos.message}</div>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
}

router.post("/", async (req, res, next) => {
    console.log(req.body);
    sendMail(req.body)
        .then(() => {
            res.status(200).json("todo/contact"); // A changer ??
        })
        .catch((err) => {
            res.status(500).json("todo/contact");
        });
});

module.exports = router;