module.exports = {
  webpack: (config) => {
    config.resolve.extensions = ['.ts', '.js', '.jsx', '.tsx', '.svg', '.scss'];
    return config;
  },
};

const {
  NEXTAUTH_URL,
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  GITHUB_ID,
  GITHUB_SECRET,
  DATABASE_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET,
} = process.env;

module.exports.env = {
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  GITHUB_ID,
  GITHUB_SECRET,
  DATABASE_URL,
  NEXTAUTH_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET,
};
