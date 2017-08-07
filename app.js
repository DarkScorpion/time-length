'use strict';
//Copyright (c) 2017 Александр Смит (https://github.com/DarkScorpion)
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR   = 60 * MINUTE;
const DAY    = 24 * HOUR;

function timeLength(arg1) {
  if(typeof arg1 == 'number' && arg1 >= 0) {
    return time2str(arg1);
  }

  if(typeof arg1 == 'string') {
    return str2time(arg1);
  }

  return new Error('Argument must be string or number (more 0)');
}

function time2str(arg1) {
  var tmp;
  var str = '';
  var time = arg1;

  tmp = time / DAY;
  if(tmp >= 1) {
    tmp = parseInt(tmp);
    str += tmp + 'd';
    time -= tmp * DAY;
  }

  var tmp = time / HOUR;
  if(tmp >= 1) {
    tmp = parseInt(tmp);
    str += tmp + 'h';
    time -= tmp * HOUR;
  }

  var tmp = time / MINUTE;
  if(tmp >= 1) {
    tmp = parseInt(tmp);
    str += tmp + 'm';
    time -= tmp * MINUTE;
  }

  var tmp = time / SECOND;
  if(tmp >= 1) {
    tmp = parseInt(tmp);
    str += tmp + 's';
    time -= tmp * SECOND;
  }

  if(str.length == 0) {
    str += '0s';
  }

  return str;
}

function str2time(arg1) {
  var sec = arg1.match(/\d{1,}s/);
  var min = arg1.match(/\d{1,}m/);
  var hours = arg1.match(/\d{1,}h/);
  var days = arg1.match(/\d{1,}d/);

  var time = 0;
  if(sec) {
    time += parseInt( sec[0].replace('s', '') ) * SECOND;
  }
  if(min) {
    time += parseInt( min[0].replace('m', '') ) * MINUTE;
  }
  if(hours) {
    time += parseInt( hours[0].replace('h', '') ) * HOUR;
  }
  if(days) {
    time += parseInt( days[0].replace('d', '') ) * DAY;
  }

  return time;
}

module.exports = timeLength;
