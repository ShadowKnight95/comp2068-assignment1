var express = require('express');
var router = express.Router();

/* GET contact me page. */
router.get('/contact-me', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me',
  message: 'This is my contact me page.'
  });
});

module.exports = router;
