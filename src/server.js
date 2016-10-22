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

// router.get('/', function (req, res) {

// 	var mocks = [10];

// 	for (var i = 0; i < 10; i++) {
// 		mocks[i] = {
// 			lat: 51.045091,
// 			long: -114.057198,
// 			id: i,
// 			content: 'This was my tweet #help. ' + i,
// 			handle: '@thedude',
// 			social: 1,
// 			profilepic: 'https://avatars0.githubusercontent.com/u/1208574?v=3&s=466',
// 			photos: ['https://tse3.mm.bing.net/th?id=OIP.Mda2551d47b8ae00fa7beb583bff53236o0&pid=15.1'
// 				, 'http://images.clipartpanda.com/hair-clipart-Woman-With-Flowing-Hair.png'
// 				, 'http://www.clipartlord.com/wp-content/uploads/2016/03/koala14.png'
// 				, 'http://www.clipartlord.com/wp-content/uploads/2015/08/apple21.png'
// 				, 'https://tse1.mm.bing.net/th?id=OIP.Mf9d07dbbfbb1fa77692c9df6f09226a5o0&w=117&h=138&c=7&rs=1&qlt=90&o=4&pid=1.1'
// 			]
// 		};
// 	}

// 	res.jsonp(mocks);
// });

router.get('/cases/', function (req, res) {

	var mocks = [10];

	for (var i = 0; i < 10; i++) {
		mocks[i] = {
			id: i,
			registered_account_id: i,
			is_archived: false,
			archived_by: i,
			last_update: "10/10/2016",
			created_date:"10/10/2016",
			log: 41.94000,
			lat: -115.00002,
			profilepic: 'https://avatars0.githubusercontent.com/u/1208574?v=3&s=466',
			photos: ['https://tse3.mm.bing.net/th?id=OIP.Mda2551d47b8ae00fa7beb583bff53236o0&pid=15.1'
				, 'http://images.clipartpanda.com/hair-clipart-Woman-With-Flowing-Hair.png'
				, 'http://www.clipartlord.com/wp-content/uploads/2016/03/koala14.png'
				, 'http://www.clipartlord.com/wp-content/uploads/2015/08/apple21.png'
				, 'https://tse1.mm.bing.net/th?id=OIP.Mf9d07dbbfbb1fa77692c9df6f09226a5o0&w=117&h=138&c=7&rs=1&qlt=90&o=4&pid=1.1'
			],
			social_content : [ {
				id: i,
				social_site: "Twitter",
				content: "This was a tweet #HelpMe",
			},
			{
				id: i+1,
				social_site: "FaceBook",
				content: "This was a fb post #HelpMe",
			}]
		}
	};

	res.jsonp(mocks);

});

router.get('/cases/:id', function (req, res) {

	var id = parseInt(req.params.id);

	var mock = {
			id: id,
			registered_account_id: i,
			is_archived: false,
			archived_by: i,
			last_update: "10/10/2016",
			created_date:"10/10/2016",
			log: 41.94000,
			lat: -115.00002,
			profilepic: 'https://avatars0.githubusercontent.com/u/1208574?v=3&s=466',
			photos: ['https://tse3.mm.bing.net/th?id=OIP.Mda2551d47b8ae00fa7beb583bff53236o0&pid=15.1'
				, 'http://images.clipartpanda.com/hair-clipart-Woman-With-Flowing-Hair.png'
				, 'http://www.clipartlord.com/wp-content/uploads/2016/03/koala14.png'
				, 'http://www.clipartlord.com/wp-content/uploads/2015/08/apple21.png'
				, 'https://tse1.mm.bing.net/th?id=OIP.Mf9d07dbbfbb1fa77692c9df6f09226a5o0&w=117&h=138&c=7&rs=1&qlt=90&o=4&pid=1.1'
			],
			social_content : [ {
				id: i,
				social_site: "Twitter",
				content: "This was a tweet #HelpMe",
			},
			{
				id: i+1,
				social_site: "FaceBook",
				content: "This was a fb post #HelpMe",
			}]
	};

	res.jsonp(mock);

});

app.use('/api/', router);

app.listen(expressPort);
appInsights.client.trackMetric("port", expressPort);