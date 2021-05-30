var express = require('express');
var router = express.Router();
const headerPartial = 'partials/header';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Alex Peterson', header: headerPartial, icon: 'images/headshot_clear.png' });
});


module.exports = router;

