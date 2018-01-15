'use strict';
module.exports = function(Loginuser) {
    Loginuser.greet = function(msg, cb) {
      cb(null, 'Greetings... ' + msg);
    }
    Loginuser.remoteMethod(
      'greet',
      {
        http: {path: '/status', verb: 'get'},
        returns: {arg: 'status', type: 'string'}
      }
    );
  };
