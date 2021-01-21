module.exports = {
  webpack: (config) => {
    config.resolve.extensions = ['.ts', '.js', '.jsx', '.tsx', '.svg', '.scss'];
    return config;
  },
};

const { HASURA_DB_URL, HASURA_DB_SECRET, MYSQL_HOST, MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, GITHUB_ID, GITHUB_SECRET } = process.env;

module.exports.env = {
  HASURA_DB_URL,
  HASURA_DB_SECRET,
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  GITHUB_ID,
  GITHUB_SECRET,
};
