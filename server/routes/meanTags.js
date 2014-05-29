'use strict';

var tag = require('../controllers/tags');

// The Package is past automatically as first parameter
module.exports = function(MeanTags, app, auth, database) {

    app.get('/tags', tag.search);
    app.post('/tags', tag.create);
};
