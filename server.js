const express = require("express");
require("dotenv").config();
const pokemon = require("./routes/pokemon");

// const uuid = require("uuid");
const cors = require("cors");
const app = express();
const { PORT } = process.env;

app.use("/", pokemon);
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

app.listen(PORT || 8080, () => {
  console.log("Server running on port 8080");
});
