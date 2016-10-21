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

	var mocks = [10];

	for (var i = 0; i < 10; i++) {
		mocks[i] = {
			lat: 51.045091,
			long: -114.057198,
			id: i,
			content: 'This was my tweet #help. ' + i,
			social: 'twitter',
			profilepic: 'https://avatars0.githubusercontent.com/u/1208574?v=3&s=466',
		};
	}

	res.jsonp(mocks);
});

router.get('/:id', function (req, res) {

	var id = parseInt(req.params.id);

	var mock = {
		lat: 51.045091,
		long: -114.057198,
		id: id,
		content: 'This was my tweet #help.',
		social: 'twitter',
		sentiment: 0.891234,
		profilepic: 'https://avatars0.githubusercontent.com/u/1208574?v=3&s=466',
	};

	res.jsonp(mock);
});

app.use('/', router);

app.listen(expressPort);
appInsights.client.trackMetric("port", expressPort);