var mysql = require("mysql");
var pool = mysql.createPool({
  host:"xxx.xxx.xxx.xxx",
  user:"root",
  password:"root",
  database:"jimuApp"
});

function query(sql,callback){
  pool.getConnection(function(err,connection){
    connection.query(sql, function (err,rows) {
      callback(err,rows);
      connection.release();
    });
  });
}

exports.query = query;
