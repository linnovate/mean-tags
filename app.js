'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MeanTags = new Module('mean-tags');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MeanTags.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    MeanTags.routes(app, auth, database);

    MeanTags.aggregateAsset('css', 'tags.css');

    return MeanTags;
});
