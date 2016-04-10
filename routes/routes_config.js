var app = require('app');

/*资源管理*/
var zygl = require('./routes/zygl');
/*文化大数据库*/
var whdb = require('./routes/whdb');





app.use('/', routes);
app.use('/zygl', zygl);
app.use('/whdb',whdb);


module.exports = router_config;