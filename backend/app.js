const express = require("express");
const morgan = require("morgan");
const wordRouter = require("./routes/wordRoutes");
const app = express();
const cors = require("cors");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use("/api/v1/words", wordRouter);

module.exports = app;
