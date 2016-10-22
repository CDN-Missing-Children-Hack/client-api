var express = require('express');
var bodyParser = require("body-parser");
var appInsights = require("applicationinsights");
var DocumentDBClient = require('documentdb').DocumentClient;
var config = require('./config');
var controller = require('./controllers/case_controller');

//Connect Application Insights
appInsights.setup(config.appInsightsKey).start();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set listening port
var expressPort = process.env.PORT || 80;

var router = express.Router();

//Setup and link api endpoints
router.route('/cases')
	.get(controller.getAllCases);
router.route('/cases/:id')
	.get(controller.getCase);

app.use('/api', router);

app.listen(expressPort);
appInsights.client.trackMetric("port", expressPort);