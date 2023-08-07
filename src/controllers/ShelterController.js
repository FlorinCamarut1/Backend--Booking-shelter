const { response } = require("express");
const db = require("../utils/dbConnection");
const fs = require("fs");

exports.getShelters = (req, response, next) => {
  db.query("select * from shelters;", (err, res) => {
    response.send(res);
  });
};
// const shelters = [];
// res.forEach((shelter) => {
//   const folderName = `public/images/${shelter.name}`;
//   try {
//     if (!fs.existsSync(folderName)) {
//       fs.mkdirSync(folderName);
//       shelters.push(folderName);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// });
