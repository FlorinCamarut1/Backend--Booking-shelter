const { response } = require("express");
const db = require("../utils/dbConnection");

exports.addBooking = (req, response, next) => {
  const date = req.body;
  if (date.bookDate === "Invalid Date") {
    const error = new Error("Cannot enter invalid DATE");
    error.statusCode = 410;
    return next(error);
  }
  db.query(
    `SELECT COUNT(*) AS count FROM Bookings WHERE booking_date = '${date.bookDate}'  and shelterId = ${date.shelterId} ;`,
    (err, res) => {
      if (err) {
        return next(err);
      }
      const count = res[0].count;
      if (count > 0) {
        const error = new Error("Date Already booked");
        error.statusCode = 411;
        return next(error);
      }

      db.query(
        `INSERT INTO Bookings ( booking_date, userId, shelterId) VALUES ('${date.bookDate}',${date.userId},${date.shelterId}) `,
        (err, res) => {
          if (err) {
            // Handle the database insert error
            return next(err);
          }
          response.send(res);
        }
      );
    }
  );
};
exports.getBookings = (req, response, next) => {
  db.query("select * from Bookings;", (err, res) => {
    response.send(res);
  });
};
