var express = require('express');
var router = express.Router();

/* GET about me page. */
router.get('/about-me', function(req, res, next) {
  res.render('aboutme', { title: 'About Me',
  message: 'This is my about me page.'
  });
});

module.exports = router;
