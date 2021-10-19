/** @type {import('next').NextConfig} */

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  modifyVars: {
    '@primary-color': '#52b3e1',
  },

  sassOptions: {
    prependData: '@import "./public/sass/_variables.scss";',
  },

  reactStrictMode: true,

  webpack(config) {
    return config;
  },
});
