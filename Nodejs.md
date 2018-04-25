# Nodejs

<pre><code>
'use strict';

function printHelloEs5(){
  console.log('hello es5');
};

const printHelloEs6 = () => {
  console.log('hello es6');
};

printHelloEs5(); // hello es5
printHelloEs6(); // hello es6

const string10 = '10';
const number10 = 10;

console.log('string:%s', string10); // string:10
console.log('number:%d', number10); // number:10

const isNan123 = isNaN(123); // isNaN(is Not a Number)
console.log(isNan123); // false

const isNaNHello = isNaN('hello');
console.log(isNaNHello); // true

const number = !1;
console.log(number); // false
</code></pre>