const { response } = require("express");
const db = require("../utils/dbConnection");
const fs = require("fs");

exports.getShelters = (req, response, next) => {
  db.query(
    "select a.id,a.name,a.lat,a.lng, a.image,b.region from shelters a, regions b where a.regionId = b.id ;",
    (err, res) => {
      response.send(res);
    }
  );
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
