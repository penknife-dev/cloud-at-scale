const env = process.env.NODE_ENV;

module.exports = {
  reactStrictMode: true,
  assetPrefix: env == "developmet" ? null : process.env.PROD_HOST,
  basePath: env == "developmet" ? null : process.env.PROD_HOST,
  exportTrailingSlash: true,
};
