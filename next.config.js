
module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.extensions = ['.ts', '.js', '.jsx', '.tsx', '.svg', '.scss'];
    return config;
  }
}


module.exports.env = {

  BUTTONDOWN_API_KEY: process.env.BUTTONDOWN_API_KEY,
};
