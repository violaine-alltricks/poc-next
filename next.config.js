/** @type {import('next').NextConfig} */

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  modifyVars: {
    '@primary-color': '#50cc0e',
  },

  sassOptions: {
    prependData: '@import "./public/sass/_variables.scss";',
  },

  reactStrictMode: true,

  webpack(config) {
    return config;
  },
});
