var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456'
});
connection.connect();
//创建数据库
connection.query('CREATE DATABASE IF NOT EXISTS dong DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function(error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
//使用数据库
connection.query('use dong;');
// 创建表和字段
  connection.query(`CREATE TABLE IF NOT EXISTS user(
    name text,
    age int

  );`, function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
connection.end();