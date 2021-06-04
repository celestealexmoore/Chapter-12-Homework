const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: DB_PW,
  databaseName: DB_NAME
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;