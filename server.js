var express = require('express');
var bodyParser = require("body-parser");
var appInsights = require("applicationinsights");

appInsights.setup("XXXXXXXXXXXXXXXXXXXX").start();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var expressPort = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function (req, res) {
	res.type('text/plain');
	res.send("Nothing to see here...");
});

app.use('/', router);

app.listen(expressPort);
appInsights.client.trackMetric("port", expressPort);