const express = require("express");
require("./db/mongoose"); //ensures the file runs
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json()); // automatically parse json request
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
