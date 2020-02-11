const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'node-test',
  password: 'root',
  database: 'company'
});

mysqlConnection.connect((err) => {
  if(err) {
    console.log(err);
    return;
  } else {
    console.log('DB is connected');
  }
});

module.exports = mysqlConnection;