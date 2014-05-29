'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var TagSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        default: 'default'
    },
    title: {
        type: String,
        default: '',
        trim: true
    }

});


mongoose.model('Tag', TagSchema);