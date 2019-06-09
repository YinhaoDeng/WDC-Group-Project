var express = require('express');
var router = express.Router();
var chris = require("./db")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/chrisinfo", function(req, res, next){
  chris.connect();

  conn.query('SELECT * FROM restaurant_detail;', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);
  });

  chris.end();
});

module.exports = router;
