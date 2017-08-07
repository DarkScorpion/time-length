'use strict'
var deepEqual = require('assert').deepEqual;

var timeLength = require('../app.js');

const ERROR = new Error('Argument must be string or number (more 0)');

describe('Error handling', () => {

  it('Argument: object', () => {
    deepEqual( timeLength({a1: 1}), ERROR );
  })

  it('Argument: boolin', () => {
    deepEqual( timeLength(true), ERROR );
  })

  it('Negative number', () => {
    var time = -5;
    deepEqual( timeLength(time), ERROR );
  })

});
