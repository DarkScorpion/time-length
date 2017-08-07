'use strict'
var equal = require('assert').equal;

var timeLength = require('../app.js');

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR   = 60 * MINUTE;
const DAY    = 24 * HOUR;

describe('String to time', () => {

  it('30s', () => {
    equal( timeLength('30s'), 30 * SECOND );
  })

  it('2m', () => {
    equal( timeLength('2m'), 2 * MINUTE );
  })

  it('3h', () => {
    equal( timeLength('3h'), 3 * HOUR );
  })

  it('5d', () => {
    equal( timeLength('5d'), 5 * DAY );
  })

  it('1m3s', () => {
    equal( timeLength('1m3s'), 1 * MINUTE + 3 * SECOND );
  })

  it('2h10m25s', () => {
    var time = 2 * HOUR + 10 * MINUTE + 25 * SECOND;
    equal( timeLength('2h10m25s'), time );
  })

  it('3d11m', () => {
    var time = 3 * DAY + 11 * MINUTE;
    equal( timeLength('3d11m'), time );
  })

});

describe('String to time (not standart input)', () => {

  it('1s11m2d', () => {
    var time = 2 * DAY + 11 * MINUTE + 1 * SECOND;
    equal( timeLength('1s11m2d'), time );
  })

  it('2h 5m 18d', () => {
    var time = 18 * DAY + 2 * HOUR + 5 * MINUTE;
    equal( timeLength('2h 5m 18d'), time );
  })

  it('2m99s', () => {
    var time = 2 * MINUTE + 99 * SECOND;
    equal( timeLength('2m99s'), time );
  })

  it('5s2h9s', () => {
    var time = 2 * HOUR + 5 * SECOND;
    equal( timeLength('5s2h9s'), time );
  })

  it('5 h 21m 99sec => 21 minutes 99 seconds', () => {
    var time = 21 * MINUTE + 99 * SECOND;
    equal( timeLength('5 h 21m 99sec'), time );
  })
});
