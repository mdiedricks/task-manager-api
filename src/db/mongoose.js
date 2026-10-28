const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console.log, "Mongoose connection error"));
db.on("open", () => console.log("Mongoose connected"));
