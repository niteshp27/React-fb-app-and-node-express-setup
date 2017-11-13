var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send(); //set headers
  // And insert something like this instead:
  var rz = res.json([{
  	id: 1,
  	username: "Superman"
  },
  {
  	id: 2,
  	username: "Spiderman"
  }]);

  
});

module.exports = router;
