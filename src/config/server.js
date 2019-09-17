const devConf = {
  blockchain: "aion",
  database: "mongodb://localhost/loyalty_token_database"
};
const testConf = {
  blockchain: "aion",
  database: "mongodb://localhost/test_loyalty_token_database"
};
const config = { development: devConf, test: testConf };
const configType = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
module.exports.config = config[configType];
