'use strict';

var debug = require('debug')('finnish-hetu');
module.exports = function FinnishSsn() {
  const CHECK_KEYS = '0123456789ABCDEFHJKLMNPRSTUVWXY'.split('');
  return {
    validate: function(ssn) {
      debug('ssn: %s' + ssn);
      if(!(/^(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])\d{2}(-?|A?)([0-9]{3})(\d{1}|[a-zA-Z]{1})$/).test(ssn)) {
        return false;
      } else {
        var dayOfMonth = ssn.substring(0, 2);
        var monthOfYear = ssn.substring(2, 4);
        var year = ssn.substring(4, 6);
        var separator = ssn.substring(6, 7);
        var index = ssn.substring(7, 10);
        var checkCharacter = ssn.substring(10, 11);
        var checkNumber = dayOfMonth + monthOfYear + year + index;
        var checkNumberIndex = Number(checkNumber) % 31;
        return CHECK_KEYS[checkNumberIndex] === checkCharacter;
      }
    }
  };
};

