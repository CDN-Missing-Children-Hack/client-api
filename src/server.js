var express = require('express');
var bodyParser = require("body-parser");
var appInsights = require("applicationinsights");
var DocumentDBClient = require('documentdb').DocumentClient;
<<<<<<< HEAD
var caseController = require('../src/controllers/case_controller');
var userController = require('../src/controllers/user_controller');
//Connect Application Insights
var config = require('./config');
appInsights.setup("config.appInsightsKey").start();
//appInsights.setup("config.localkey").start();
=======
var config = require('./config');
var controller = require('./controllers/case_controller');

//Connect Application Insights
appInsights.setup(config.appInsightsKey).start();
>>>>>>> 6a0e358e85d07062131315944d870f1e318ab050

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set listening port
var expressPort = process.env.PORT || 80;

var router = express.Router();

//Setup and link api endpoints
router.route('/cases')
	.get(caseController.getAllCases);
router.route('/cases/:id')
	.get(caseController.getCase);

router.route('/login')
	.post(userController.postLogin);

app.use('/api', router);

app.listen(expressPort);
appInsights.client.trackMetric("port", expressPort);