const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const con = require("./src/utils/dbConnection");
// const home = require("./src/routes/homerouter");
// const api = require("./src/routes/apirouter");
const user = require("./src/routes/UserRouter");
const shelters = require("./src/routes/ShelterRouter");
const Bookings = require("./src/routes/BookingRouter");
const app = express();
app.use(cors({ origin: "http://localhost:3006", optionsSuccessStatus: 200 }));
app.use(express.static("public"));
const PORT = process.env.PORT || process.env.APP_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(home);
// app.use(api);
app.use("/user", user);
app.use("/shelters", shelters);
app.use("/Bookings", Bookings);

app.listen(PORT);
console.log("Server started at http://localhost:" + PORT);
