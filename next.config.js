/** @type {import('next').NextConfig} */

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './styles/antd-theme.less',
  lessVarsFilePathAppendToEndOfContent: false,

  sassOptions: {
    prependData: '@import "./styles/_variables.scss";',
  },

  reactStrictMode: true,

  webpack(config) {
    return config;
  },

  target: 'serverless',
  async rewrites() {
    return [
      {
        source: '/list/:any*',
        destination: '/list',
      },
      {
        source: '/sw/:id',
        destination: '/sw/:id',
      },
      {
        source: '/logout',
        destination: '/logout',
      },
      {
        source: '/login',
        destination: '/login',
      },
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
});
