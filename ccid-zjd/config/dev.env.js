var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
<<<<<<< HEAD
    proxyTarget: " "
=======
    proxyTarget: "http://172.16.64.55:8092"
>>>>>>> 专家端对接接口
    // proxyTarget: 'http://na.wenes.com/API'
});