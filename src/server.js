var express = require('express');
var bodyParser = require("body-parser");
var appInsights = require("applicationinsights");
var DocumentDBClient = require('documentdb').DocumentClient;
var caseController = require('./controllers/case_controller');
var userController = require('./controllers/user_controller');
//Connect Application Insights
var config = require('./config');
appInsights.setup("config.appInsightsKey").start();
//appInsights.setup("config.localkey").start();


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set listening port
var expressPort = process.env.PORT || 8080;

var router = express.Router();

//Setup and link api endpoints
router.route('/cases')
	.get(caseController.getAllCases);
router.route('/cases/:id')
	.get(caseController.getCase);

router.route('/twitter-profiles')
	.get(caseController.getAllProfiles);

router.route('/login')
	.post(userController.postLogin);

app.use('/api', router);

app.listen(expressPort);
appInsights.client.trackMetric("port", expressPort);