'use strict';

/**
 * Module dependencies.
 */

require('../models/tag');

var mongoose = require('mongoose'),
	Tag = mongoose.model('Tag');
	// _ = require('lodash');

/**
 * Find tag by id
 */
exports.search = function(req, res, next) {
	var word = req.query.word;
	var regex = new RegExp('^' +word + '.*', 'i');
	var query = {
		title: regex
	};
	Tag.find(query, {}, { sort: {title: 1 }}, function(err, tags) {
		return res.jsonp(tags);
	});
};

/**
 * Create a tag
 */
exports.create = function(req, res) {
    var tag = new Tag(req.body);

    tag.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                tag: tag
            });
        } else {
            res.jsonp(tag);
        }
    });
};