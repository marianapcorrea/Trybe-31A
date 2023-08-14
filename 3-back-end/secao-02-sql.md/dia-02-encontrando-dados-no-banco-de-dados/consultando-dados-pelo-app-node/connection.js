const mysql = require('mysql2/promise');

const connection = mysql.createPool(({
  host: 'localhost',
  user: 'root',
  password: 'mysql-senha',
  port: 55005,
  database: 'sakila'
}))

module.exports=connection