# convert-to-dateformat [![Build Status](https://travis-ci.org/liyang0612/convert-to-dateformat.svg?branch=master)](https://travis-ci.org/liyang0612/convert-to-dateformat)
> For time stamp convert to date format

##Install

```
$ npm i --save convert-to-dateformat
```

##Usage

```js
var convertToDateFormat = require('convert-to-dateformat');
var timeStamp = Date.parse(new Date());
console.log(convertToDateFormat(timeStamp));
// =>  '2018-04-22 14:16:16'
```