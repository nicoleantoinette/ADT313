const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/movieproject-api/**",
    createProxyMiddleware({
      target: "http://192.168.25.60/movieproject-api",
      changeOrigin: true,
      secure: false,
    })
  );
};
