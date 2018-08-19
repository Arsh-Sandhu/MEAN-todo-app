var configValues = require('../config');

module.exports = {
    getDbConnString: function () {
        // return mongoDB connection string
        return "mongodb://" + configValues.uname + ':' + configValues.password + '@ds123532.mlab.com:23532/nodetododb';
    }
}