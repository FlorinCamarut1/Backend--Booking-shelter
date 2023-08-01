const { response } = require("express");
const db = require("../utils/dbConnection");

/**
 * Get users form users table
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
exports.getUsers = (req, response, next) => {
  db.query("select * from users;", (err, res) => {
    response.send(res);
  });
};
/**
 * add users
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
exports.addUser = (req, response, next) => {
  const user = req.body;
  if ((user.username || user.password).trim().length === 0) {
    const error = new Error("User or pass too short");
    error.statusCode = 400;
    return next(error);
  }

  // Check if the user already exists based on the username
  db.query(
    `SELECT COUNT(*) AS count FROM users WHERE username = '${user.username}';`,
    (err, res) => {
      if (err) {
        // Handle the database query error
        return next(err);
      }

      const count = res[0].count;
      if (count > 0) {
        // User with the same username already exists, throw an error
        const error = new Error("User already exists");
        error.statusCode = 409; // Conflict status code
        return next(error);
      }

      // User does not exist, proceed with inserting the new user
      db.query(
        `INSERT INTO users (username, password, age) VALUES ('${user.username}', '${user.password}', ${user.age});`,
        (err, res) => {
          if (err) {
            // Handle the database insert error
            return next(err);
          }
          response.send("ok");
        }
      );
    }
  );
};

/**
 * verify user
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
exports.verifyUser = (req, response, next) => {
  const user = req.body;
  db.query(
    `SELECT * from users where username = '${user.username}' and password = '${user.password}' ;`,
    (err, res) => {
      if (res && res.length > 0) {
        response.send("acount exists");
      } else {
        response.status(404).send("account doesent exist");
      }
    }
  );
};
/**
 * update user 1
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
exports.updateUser = (req, response, next) => {
  const user = req.body;
  db.query(
    `UPDATE users SET username = '${user.username}', password = '${user.password}', age = ${user.age}  WHERE idusers = 2;`,
    (err, res) => {
      response.send(res);
    }
  );
};
/**
 * delete user
 * @param {*} req
 * @param {*} response
 * @param {*} next
 */
exports.deleteUser = (req, response, next) => {
  const id = req.params.iduser;
  db.query(`DELETE FROM users WHERE idusers = ${id}`, (err, res) => {
    response.send("ok");
  });
};
