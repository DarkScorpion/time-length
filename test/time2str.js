'use strict'
var equal = require('assert').equal;

var timeLength = require('../app.js');

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR   = 60 * MINUTE;
const DAY    = 24 * HOUR;

const ERROR = new Error('Argument must be string or number (more 0)');

describe('Time to string', () => {

  it('3 days', () => {
    var time = 3 * DAY;
    equal( timeLength(time), '3d' );
  })

  it('5 hours', () => {
    var time = 5 * HOUR;
    equal( timeLength(time), '5h' );
  })

  it('7 minutes', () => {
    var time = 7 * MINUTE;
    equal( timeLength(time), '7m' );
  })

  it('11 seconds', () => {
    var time = 11 * SECOND;
    equal( timeLength(time), '11s' );
  })

  it('2 minutes 33 seconds', () => {
    var time = 2 * MINUTE + 33 * SECOND;
    equal( timeLength(time), '2m33s' );
  })

  it('4 hours 21 seconds', () => {
    var time = 4 * HOUR + 21 * SECOND;
    equal( timeLength(time), '4h21s' );
  })

  it('7 days 5 hours 21 minutes 7 seconds', () => {
    var time = 7 * DAY + 5 * HOUR + 21 * MINUTE + 7 * SECOND;
    equal( timeLength(time), '7d5h21m7s' );
  })

});

describe('Time to string (not standart input)', () => {

  it('0 seconds => "0s"', () => {
    var time = 0;
    equal( timeLength(time), '0s' );
  })

});
