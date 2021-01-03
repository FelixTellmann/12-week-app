
module.exports = {
  webpack: (config) => {
    config.resolve.extensions = ['.ts', '.js', '.jsx', '.tsx', '.svg', '.scss'];
    return config;
  }
}


const { HASURA_DB_URL, HASURA_DB_SECRET} = process.env

module.exports.env = {
  HASURA_DB_URL,
  HASURA_DB_SECRET,
};
