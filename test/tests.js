
describe('use-https', function () {

  var assert = require('assert');
  var protocol = require('protocol');
  var https = require('use-https');

  afterEach(function () {
    protocol.reset();
  });

  describe('https()', function () {
    it('http:', function () {
      protocol('http:');
      assert(false === https());
    });

    it('https:', function () {
      protocol('https:');
      assert(true === https());
    });

    it('chrome-extension:', function () {
      protocol('chrome-extension:');
      assert(true === https());
    });

    it('file:', function () {
      protocol('file:');
      assert(false === https());
    });
  });

  describe('https(url)', function () {
    it('http:', function () {
      protocol('http:');
      assert('http://example.com' == https('//example.com'));
    });

    it('https:', function () {
      protocol('https:');
      assert('https://example.com' == https('//example.com'));
    });

    it('chrome-extension:', function () {
      protocol('chrome-extension:');
      assert('https://example.com' == https('//example.com'));
    });

    it('file:', function () {
      protocol('file:');
      assert('http://example.com' == https('//example.com'));
    });
  });

});