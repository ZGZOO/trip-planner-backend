const express = require("express");
const app = express();

const parser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

const tripsRouter = require("./controllers/trips");

app.use(parser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

app.use("/api", tripsRouter);

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
