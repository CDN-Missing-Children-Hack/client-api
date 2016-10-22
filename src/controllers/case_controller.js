//Create enpoint /api/cases/ for GET
exports.getAllCases = function (req, res) {
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

	res.json(mocks);
};

// Create endpoint /api/beers/:id for GET
exports.getCase = function (req, res) {

	var id = parseInt(req.params.id);

	var mock = {
			id: id,
			registered_account_id: 1,
			is_archived: false,
			archived_by: 1,
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
				id: 1,
				social_site: "Twitter",
				content: "This was a tweet #HelpMe",
			},
			{
				id: 2,
				social_site: "FaceBook",
				content: "This was a fb post #HelpMe",
			}]
	};

	res.json(mock);

};