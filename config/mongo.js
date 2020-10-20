const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () =>
  console.log("Super, mon app est connectée !")
);

mongoose.connection.on("error", () =>
  console.log("Erreur de connection de l'app")
);

// doc @ https://mongoosejs.com/