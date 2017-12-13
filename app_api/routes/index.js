var express             = require('express');
var router              = express.Router();
var ctrlDarkSkyApi     = require('../controllers/darkskyapi');



/* API KEYS */
router.get('/darkskyapi/:lat/:lon', ctrlDarkSkyApi.getWeatherData);

module.exports = router;

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});



