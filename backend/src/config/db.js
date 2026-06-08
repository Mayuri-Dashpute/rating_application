const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "store_rating_app",
});

module.exports = pool;
