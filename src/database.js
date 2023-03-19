const {createConnection} = require('mysql2')

var con = createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    //socketPath: "/tmp/mysql. sock"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM mysql.db", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });