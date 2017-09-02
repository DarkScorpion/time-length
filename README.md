## Time length

Function converts special string to the number of milliseconds and back (number to special string).  
Support days('d'), hours('h'), minutes('m'), seconds('s').  

### Install
```bash
$ npm i time-length
```

### Examples
```js
var tl = require('time-length');
var time = tl('2h15m30s'); // 2 hours 15 minutes 30 seconds in milliseconds
//or
var time = tl('2h 15m 30s');

console.log( tl('5s') ); //=> 5000
console.log( tl('2m') ); //=> 120000
console.log( tl('1h5s') ); //=> 3605000

//Supports spaces
console.log( tl('3m5s') ); //=> 185000
console.log( tl('3m 5s') ); //=> 185000

//Supports not standart input data
console.log( tl('155s') ); //=> 155000
console.log( tl('61m61s') ); //=> 3721000
console.log( tl('3s2m') ); //=> 122000
```

## Time to string
```js
console.log( tl(7000) ); //=> '7s'
console.log( tl(14421000) ); //=> '4h21s'
```
