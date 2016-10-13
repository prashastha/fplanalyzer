'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.playersGET = function playersGET (req, res, next) {
  Default.playersGET(req.swagger.params, res, next);
};
