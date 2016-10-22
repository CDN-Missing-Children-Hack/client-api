var config = {}

//DocumentDB: Profile Storage
config.host = process.env.DOC_DB;
config.authKey = process.env.AUTH_KEY;
config.databaseId = "missingdata";
config.collectionId = "twitter-data";

config.collLink = 'dbs/' + config.databaseId + '/colls/' + config.collectionId;

//Telemitry
config.appInsightsKey = process.env.APP_INSIGHTS_KEY;

module.exports = config;