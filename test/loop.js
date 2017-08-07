'use strict'
var equal = require('assert').equal;

var timeLength = require('../app.js');

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR   = 60 * MINUTE;
const DAY    = 24 * HOUR;

describe('Loop test: time -> string -> time', () => {

  it('5 days', () => {
    var time = 3 * DAY;
    var str = timeLength(time);
    equal( time, timeLength(str) );
  })

  it('2 hours 11 minutes 35 seconds', () => {
    var time = 2 * HOUR + 11 * MINUTE + 35 * SECOND;
    var str = timeLength(time);
    equal( time, timeLength(str) );
  })

});

describe('Loop test: string -> time -> string', () => {

  it('3d', () => {
    var str = '3d';
    var time = timeLength(str);
    equal( str, timeLength(time) );
  })

  it('5d3h11s', () => {
    var str = '5d3h11s';
    var time = timeLength(str);
    equal( str, timeLength(time) );
  })

});
