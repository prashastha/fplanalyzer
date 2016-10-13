'use strict';

var request = require('request');

exports.playersGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  var examples = {};
  
  
  request('https://fantasy.premierleague.com/drf/bootstrap-static', 
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body)
      examples['application/json'] = [ {
      "single" : true,
      "data" : body
      } ];
    }
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
    
  })
}

