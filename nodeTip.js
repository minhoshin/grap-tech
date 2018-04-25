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

for(let i=0; i<3; i+=1){
    console.log(i);
};

const users = [
    { name: 'user1', age: 31 },
    { name: 'user2', age: 34 }
];

for(const user of users){
    console.log(user);
};

users.forEach( function(user) {
    console.log(user);
});

users.forEach( user => console.log(user) );

const switchNumber = 9;
let switchMsg = '';

switch (switchNumber) {
    case 1:
        switchMsg = '값이 아닙니다.';
        break;
    case 2:
        switchMsg = '값이 아닙니다.';
        break;
    case 3:
        switchMsg = '찾는 값입니다.';
        break;
    case 4:
        switchMsg = '값이 아닙니다.';
        break;
    default:
        switchMsg = '값이 아닙니다.';
};
console.log('switchMsg: '+switchMsg);

const today = new Date();
const date1 = new Date(2017, 9 - 1, 2);
const date2 = new Date(2017, 8, 2);
const date3 = new Date(2017, 8, 3, 18);
const date4 = new Date(2017, 8, 3, 18, 20);
const date5 = new Date(2017, 8, 3, 18, 20, 30);

// console.log(today.toLocaleString());
// console.log(date1.toLocaleString());
// console.log(date2.toLocaleString());
// console.log(date3.toLocaleString());
// console.log(date4.toLocaleString());
// console.log(date5.toLocaleString());
// console.log(today.toLocaleDateString());
// console.log(today.toLocaleTimeString());
//
// console.log(today.getFullYear());
// console.log(today.getMonth()+1);
// console.log(today.getDate());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());

const getYymmdd = (date) => {
  const yyyy = date.getFullYear();
  const mm = (date.getMonth() < 9)? `0${date.getMonth()+1}` : (date.getMonth()+1);
  const dd = (date.getDate() < 10)? `0${date.getMonth()}` : (date.getDate());
  return `${yyyy}-${mm}-${dd}`
};

console.log(getYymmdd(new Date()));

const dateToTimestamp = today.getTime(); // timestamp 생성
console.log('dateToTimestamp: ' + dateToTimestamp);

const timestampToDate = new Date();
console.log('timestampToDate: ' + timestampToDate);

const timestampToDate1 = new Date(dateToTimestamp);
console.log('timestampToDate1: ' + timestampToDate1);

try { // try catch finally
    printMessage('hello');
} catch (e) {
    console.log('try catch error: '+e);
    console.error('try catch error: '+e);
} finally {
    console.log('try catch next finally print');
};
console.log('try catch passed');

// console.log(process.env);
// console.log(process.arch);
// console.log(process.uptime());
// console.log(process.memoryUsage());
// console.log(process.version);
// console.log(process.versions);

const students = [
    { name: 'minho', age: 40, score: 75},
    { name: 'yejin', age: 37, score: 85},
    { name: 'jiwoo', age: 3, score: 95},
];

const getDegree = (score) => {
    if(score >= 90){
        return 'A';
    }else if(score >= 80){
        return 'B';
    }else if(score >= 60){
        return 'C';
    };
    return 'F';
};

students.forEach( (student) => {
    const result = `name: ${student.name}, score: ${getDegree(student.score)}`;
    console.log(result);
} );

function printMesssage(message){
    console.log(message);
}

const printWelcome = function() {
    console.log('welcome');
}

printMesssage('bye');
printWelcome();

const pm = printMesssage;
pm('good morning');

function plus(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function calculate(a, b, func){
    return func(a, b);
}

console.log(calculate(10, 20, plus));
console.log(calculate(10, 20, minus));

const printHello = () => console.log('hello'); // {} 생략 가능 console.log 실행하고 끝나는 경우는 null return
printHello();

const printHello2 = () => 'hello2'; // 'hello2' 를 리턴
console.log(printHello2());

const printMessageRe = message => console.log(message);
printMesssage('message');

const sumAndPrint = (a, b) => {
    const result = a + b;
    return `결과는 ${result}`;
}

const sumAndPrintResult = sumAndPrint(10, 20);
console.log(sumAndPrintResult);