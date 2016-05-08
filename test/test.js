var defined = require('../index.js').defined;
var define = require('../index.js').define;
var expect = require("expect.js");

describe('The FOO constant', function() {
   it('should be undefined at first', function() {
      expect(typeof FOO).to.be("undefined");
   });
   it('should be defined after it was declared using "define" function', function() {
      define("FOO", "Bar");
      expect(FOO).to.be("Bar");
   });
   it('cannot be changed', function() {
      define("FOO", "Bar1");
      expect(FOO).to.be("Bar");
   });
});
describe('The "defined" function', function() {
   it('should return true if constant FOO defined', function() {
      define("FOO", "Bar");
      expect(defined("FOO")).to.be.true;
   });
   it('should return false if constant FOO not defined', function() {
      expect(defined("FOO")).to.be.false;
   });
});
describe('The "define" function', function() {
   it('should return true if identifier is a string', function() {
      expect(define("FOO", "Bar")).to.be.true;
   });
   it('should return false if identifier is null', function() {
      expect(define(null, "Bar")).to.be.false;
   });
   it('should return false if identifier is a number', function() {
      expect(define(8, "Bar")).to.be.false;
   });
   it('should return false if identifier is an array', function() {
      expect(define([1,2,3], "Bar")).to.be.false;
   });
   it('should return false if identifier is an object', function() {
      expect(define({foo: 1}, "Bar")).to.be.false;
   });
   it('should return false if constant already exists', function() {
      define("FOO", "Bar");
      expect(define("FOO", "Bar1")).to.be.false;
   });
});
