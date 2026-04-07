const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

app.use(logger); // request logger

app.use("/api", taskRoutes);

app.use(errorHandler); // error handler

app.listen(3000, () => {
    console.log("Server running on port 3000");
});