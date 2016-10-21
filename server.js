var express = require('express');
var bodyParser = require("body-parser");
var appInsights = require("applicationinsights");
var DocumentDBClient = require('documentdb').DocumentClient;

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
			handle: '@thedude',
			social: 'twitter',
			profilepic: 'https://avatars0.githubusercontent.com/u/1208574?v=3&s=466',
			photos: ['https://tse3.mm.bing.net/th?id=OIP.Mda2551d47b8ae00fa7beb583bff53236o0&pid=15.1'
				, 'http://images.clipartpanda.com/hair-clipart-Woman-With-Flowing-Hair.png'
				, 'http://www.clipartlord.com/wp-content/uploads/2016/03/koala14.png'
				, 'http://www.clipartlord.com/wp-content/uploads/2015/08/apple21.png'
				, 'https://tse1.mm.bing.net/th?id=OIP.Mf9d07dbbfbb1fa77692c9df6f09226a5o0&w=117&h=138&c=7&rs=1&qlt=90&o=4&pid=1.1'
			]
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
		handle: '@thedude',
		social: 'twitter',
		sentiment: 0.891234,
		profilepic: 'https://avatars0.githubusercontent.com/u/1208574?v=3&s=466',
		photos: ['https://tse3.mm.bing.net/th?id=OIP.Mda2551d47b8ae00fa7beb583bff53236o0&pid=15.1'
			, 'http://images.clipartpanda.com/hair-clipart-Woman-With-Flowing-Hair.png'
			, 'http://www.clipartlord.com/wp-content/uploads/2016/03/koala14.png'
			, 'http://www.clipartlord.com/wp-content/uploads/2015/08/apple21.png'
			, 'https://tse1.mm.bing.net/th?id=OIP.Mf9d07dbbfbb1fa77692c9df6f09226a5o0&w=117&h=138&c=7&rs=1&qlt=90&o=4&pid=1.1'
		]
	};

	res.jsonp(mock);
});

app.use('/', router);

app.listen(expressPort);
appInsights.client.trackMetric("port", expressPort);