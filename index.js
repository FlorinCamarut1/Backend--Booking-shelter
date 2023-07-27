const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const con = require("./src/utils/dbConnection");
const home = require("./src/routes/homerouter");
const api = require("./src/routes/apirouter");
const user = require("./src/routes/userrouter");
const app = express();

const PORT = process.env.PORT || process.env.APP_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(home);
app.use(api);
app.use(user);

app.listen(PORT);
console.log("Server started at http://localhost:" + PORT);
