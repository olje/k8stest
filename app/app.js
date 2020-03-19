const http = require('http');

const hostname = '127.0.0.1';
const port = 80;


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "changeme"
  database: "helloDB"
});

var message = con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM helloworld", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
