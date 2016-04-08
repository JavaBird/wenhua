
/**
 * Created by Administrator on 2016/4/8.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('whdsjk', { layout:false});
});

module.exports = router;
