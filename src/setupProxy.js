const createProxyMiddleware = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function(app) {
    app.use(
        '/auth',
        createProxyMiddleware({
            target :"http://localhost:8080/bookshelf/",
            changeOrigin: true
        })
    );
};