const env = process.env.ENV || 'development';
console.log('Packing for environment: ' + env);
module.exports = require(`./config/webpack.${env}.js`);
