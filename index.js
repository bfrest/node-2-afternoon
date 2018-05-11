const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
require("dotenv").config;

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set("db", dbInstance));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}.`);
});
