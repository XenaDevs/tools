/** @type {import('next').NextConfig} */

const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  //
  hideSourceMaps: true
};

const moduleExports = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "jsx", "js"],
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
