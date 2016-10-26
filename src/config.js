var config = {}

//DocumentDB: Profile Storage
config.host = process.env.DOC_DB;
config.authKey = process.env.AUTH_KEY;
config.databaseId = "missingdata";
config.twitterdata_collectionId = "twitter-data";
config.twitterprofile_collectionId = "twitter-profile";

config.twitterdata_collLink = 'dbs/' + config.databaseId + '/colls/' + config.twitterdata_collectionId;
config.twitterprofile_collLink = 'dbs/' + config.databaseId + '/colls/' + config.twitterprofile_collectionId;

//Telemitry
config.appInsightsKey = process.env.APP_INSIGHTS_KEY;

//For local debug
config.localkey = 'xxxxxxxxxxx';

module.exports = config;