var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(encodeURI(config.getDbConnString()),
    { auth: { user: 'dbusername', password: 'dbpassword' }, useNewUrlParser: true },
    function (err) {
        if (err) {
            console.log('-----------ERROR -----------   :   ' + err);
            return;
        }
        console.log('Connected to DB');
    }
);
setupController(app);
apiController(app);
app.listen(port);
