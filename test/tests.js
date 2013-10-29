
describe('use-https', function () {

  var assert = require('assert');
  var protocol = require('protocol')('https:');
  var useHttps = require('use-https');

  it('should work', function () {
    assert(useHttps);
  });

});