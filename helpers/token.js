'use-strict';

var jwt = require('jsonwebtoken');
var config = require('../config'); 


/*esto no parece funcionar, cambiarlo*/
module.exports = function (parameters) {
  var date = new Date();
  var payload = {
    id    : parameters._id,
    expire: date.setSeconds(date.getSeconds() + config.expire)
  };
  return jwt.sign(payload, config.phrase, config.algorithm);
};
