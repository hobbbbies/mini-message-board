const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/index');
const messageRouter = require('./routes/message');
const newRouter = require('./routes/new');
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/message", messageRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
    console.log("Server started successfully on PORT: ", PORT);
});