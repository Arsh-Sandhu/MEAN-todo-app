var configValues = require('../config');

module.exports = {
    getDbConnString: function () {
        // return mongoDB connection string
        return "mongodb://" + configValues.uname + ':' + configValues.password + '@****.com:***312/nodetododb';
    }
}
