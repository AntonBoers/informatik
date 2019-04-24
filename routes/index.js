var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/databaser', function(req, res, next) {
  res.render('databaser', { title: 'Express' });
});


router.get('/webdesign', function(req, res, next) {
  res.render('webdesign', { title: 'Express' });
});


router.get('/quiz', function(req, res, next) {
  res.render('quiz', { title: 'Express' });
});

router.get('/reklamespil', function(req, res, next) {
  res.render('reklamespil', { title: 'Express' });
});
router.get('/apps', function(req, res, next) {
  res.render('apps', { title: 'Express' });
});


module.exports = router;
