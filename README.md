# php-defined
Clone of PHP's function "defined".

## Installation

``` bash
$ npm install --save php-defined
```

## Example Usage

``` js
var defined = require('php-defined').defined;
var define = require('php-defined').define;

define("PI", 3.14);
if(defined("PI"))
{
  console.log("PI = " + PI);
}
else
{
  console.log("PI is not defined");
}
```
