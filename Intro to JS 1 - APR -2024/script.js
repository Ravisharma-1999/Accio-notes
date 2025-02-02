/*
// How to print to console/output
// values
console.log("Hello world");
console.log("Hi Anurag", "Hello Annu", "How are you Tarun");

console.log("2024");
console.log(2024); // numbers dont need double quotes

// variables
let firstName = "Anurag";
let job = "Teacher";
console.log(firstName);
console.log(job);
// console.log(lastName); // not defined error

// you can change the value of a variable
console.log(firstName);
firstName = "Shashank";
console.log(firstName);

console.log(job);
job = "Student";
console.log(job);

console.log(firstName);
console.log(job);

///////////////////////////////////////////////////////////

// Number
let year = 2001;
let primeNumber = 13;
let interestRate = 11.25;
console.log(year);
console.log(primeNumber);
console.log(interestRate);
console.log(typeof -6.23);
console.log(typeof year);
console.log(typeof primeNumber);
console.log(typeof interestRate);

// String
let firstName = "Anurag";
let sentence = "Quick brown fox jumped over the river";
console.log(firstName);
console.log(sentence);
console.log(typeof "abcdef");
console.log(typeof firstName);
console.log(typeof sentence);
console.log("2001", 2001);
console.log(typeof "2001"); // string
console.log(typeof 2001); // number

// Boolean
let canDrinkAlcohol = true;
let isPrime = false;
let canDrive = "false";
console.log(canDrinkAlcohol);
console.log(isPrime);
console.log(canDrive);
console.log(typeof true);
console.log(typeof false);
console.log(typeof canDrinkAlcohol);
console.log(typeof isPrime);
console.log(typeof canDrive); // string

// undefined
let someExample;
console.log(someExample); // undefined
console.log(typeof undefined);
console.log(typeof someExample);

// dynamically typed language
let example = "Hello world";
console.log(example, typeof example);
example = 123;
console.log(example, typeof example);
example = false;
console.log(example, typeof example);

// other ways to create variables
let lastName = "Anurag";
console.log(lastName);
lastName = "Shashank";
console.log(lastName);
let job;
console.log(job);

const birthYear = 2001;
console.log(birthYear);
// birthYear = 2004; (const is immutable)

// const day; // const should always have some value
// console.log(day);

var subject = "Maths";
console.log(subject);
subject = "Social";
console.log(subject);

var teacher;
console.log(teacher);

// Arithmetic operators
const currYear = 2024;
const ageAnurag = currYear - 2001; // 2024 - 2001 = 23
const agePriya = currYear - 2002; // 2024 - 2002 = 22
const ageSarthak = currYear - 1999; // 2024 - 1999 = 25
console.log(ageAnurag, agePriya, ageSarthak);
console.log(ageAnurag * 2); // 23 * 2 = 46
console.log(ageSarthak / 2); // 25 / 2 = 12.5
console.log(agePriya + 5); // 22 + 5 = 27

// parseInt and toFixed
const largeFraction = 152.46578921;
console.log(largeFraction);
console.log(parseInt(largeFraction)); // 152
console.log(parseInt(123.47652)); // 123
console.log(largeFraction.toFixed(3)); // 152.466
console.log(largeFraction.toFixed(2)); // 152.47
console.log(largeFraction.toFixed(1)); // 152.5
console.log(largeFraction.toFixed(0)); // similar to parseInt

// exponential operator
// a ** b => a power b
console.log(2 ** 3); // 2 power 3 = 8
console.log(7 ** 5); // 7 power 5 = 16807
console.log(8 ** 10); // 1073741824
console.log(16 ** (1 / 2)); // 4
console.log(27 ** (1 / 3)); // 3

// modulo operator (remainder)
console.log(11 % 3); // 2
console.log(19 % 4); // 3

// addition with strings
const firstName = "Ranbir";
const lastName = "Kapoor";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// Make dynamic string based on given data
const firstName = "Anjay";
const birthYear = 1998;
const job = "Robotic Engineer";
const age = 2024 - birthYear;

console.log("Hi I am Anurag, 23 years old, working as a software engineer");
console.log(
  "Hi I am " + firstName + ", " + age + " years old, working as a " + job
);
console.log(`Hi I am ${firstName}, ${age} years old, working as a ${job}`);

// Assignment operators
let num = 10 + 5; // num = 15
console.log(num);

num += 10; // num = num + 10 => num = 15 + 10 = 25
console.log(num);

num *= 2; // num = num * 2 => num = 25 * 2 = 50;
console.log(num);

num /= 10; // num = num / 10 =>  num = 50 / 10 = 5;
console.log(num);

num **= 2; // num = num ** 2 => num = 5 ** 2 = 25;
console.log(num);

num -= 8; // num = num - 8 => num = 25 - 8 = 17;
console.log(num);

// post increment, decrement
num++; // num = num + 1 => num = 17 + 1 = 18;
console.log(num);

num--; // num = num - 1 => num = 18 - 1 = 17;
console.log(num);

// pre increment, decrement
++num; // num = num + 1 => num = 17 + 1 = 18;
console.log(num);

--num; // num = num - 1 => num = 18 - 1 = 17;
console.log(num);

// Comparision operators
const currYear = 2024;
const ageAnurag = currYear - 2001; // 2024 - 2001 = 23
const agePriya = currYear - 2002; // 2024 - 2002 = 22
const ageSarthak = currYear - 1999; // 2024 - 1999 = 25
console.log(ageAnurag, agePriya, ageSarthak);

// Is Anurag older than priya ?
console.log(ageAnurag > agePriya);

// Is Sarthak younger than Anurag ?
console.log(ageSarthak < ageAnurag);

// Are both priya and sarthak are of same age ?
console.log(agePriya == ageSarthak);

console.log(ageAnurag != ageSarthak);
console.log(22 < 22);
console.log(22 <= 22);
console.log(23 > 23);
console.log(23 >= 23);


///////////////////////////////////////////////////////

// String to Number
const birthYear = "2001";
const birthYearNum = Number(birthYear);
console.log(typeof birthYear, typeof birthYearNum);

// find the year after 23 years ?
console.log(birthYear + 23);
console.log(birthYearNum + 23);
console.log(Number("1234.45")); // 1234.45
console.log(parseInt("1234.45")); // 1234
console.log(Number("1234abcd")); // NaN
console.log(parseInt("1234abcd")); // 1234
console.log(parseInt("1x23edc5")); // 1
console.log(typeof NaN); // number

// Number to String
const a = 23;
const b = String(a);
console.log(String(23), 23);
console.log(a, b, typeof a, typeof b);

// false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(NaN));

// any other values will give true
console.log(Boolean(123));
console.log(Boolean("abcd"));

console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Type Coercion
console.log("23" + 10 + 5);
console.log(10 + 5 + "23");
console.log(5 + "23" + 10);
console.log("23" - "10" + 5);
console.log("23" * 2);
console.log(false - 12); // 0 - 12 = -12
console.log(12 - true); // 12 - 1 = 11

// If statement
const age = 21;
// const age = 16;
console.log("before IF");
if (age >= 18) {
  console.log("I can get drivers license");
}
console.log("After IF");

// If else statement
// const age = 21;
const age = 16;
console.log("before If else");

if (age >= 18) {
  console.log("I can get driver's license");
} else {
  console.log("Sorry you cannot take driver's license");
}

console.log("After If else");

// Else if statement
const day = "abcd";

if (day == "monday") {
  console.log("Plan course structure");
} else if (day == "tuesday") {
  console.log("Prepare for exams");
} else if (day == "wednesday") {
  console.log("Write examples for coding lectures");
} else if (day == "thursday") {
  console.log("Watch recordings");
} else if (day == "friday") {
  console.log("solve assignments");
} else if (day == "saturday") {
  console.log("Revise all notes");
} else if (day == "sunday") {
  console.log("attempt contest");
} else {
  console.log("Please enter a valid day");
}

// ternary operator
const age = 18;
if (age >= 21) {
  console.log("Can drink alcohol");
} else {
  console.log("Cannot drink alcohol");
}

age >= 21
  ? console.log("Can drink alcohol")
  : console.log("Cannot drink alcohol");

//////////////////////////////////////////////////////////////

// logical operators
const age = 16;
const A = age >= 20;
const B = age < 30;

// 1) NOT(!) A
console.log(!A);
// 2) A and(&&) B
console.log(A && B);
// 3) A or(||) B
console.log(A || B);
// 4) (NOT A) and B
console.log(!A && B);
// 5) A OR (NOT B)
console.log(A || !B);

// ASCII to Character
console.log(String.fromCharCode(97));
console.log(String.fromCharCode(45));

// Character to ASCII
console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
console.log("-".charCodeAt(0));
console.log("1".charCodeAt(0));

///////////////////////////////////////////////////////////////////

// For loop
console.log("Level 1");
console.log("Level 2");
console.log("Level 3");
console.log("Level 4");
console.log("Level 5");

for (let num = 1; num <= 10; num++) {
  console.log(`Level ${num}`);
}

console.log("Level 5");
console.log("Level 4");
console.log("Level 3");
console.log("Level 2");
console.log("Level 1");

for (let num = 10; num > 0; num--) {
  console.log(`Level ${num}`);
}

// break
for (let num = 1; num <= 5; num++) {
  if (num == 3) {
    console.log("Sorry you cannot proceed to next level");
    break;
  }

  console.log(`Level ${num}`);
}
console.log("outside for loop");

// continue
for (let num = 1; num <= 5; num++) {
  if (num == 3) {
    console.log("You can skip this level");
    continue;
  }

  console.log(`Level ${num}`);
}

console.log("outside for loop");

/////////////////////////////////////////////////////////////////////

// while loop
let num = 1;

while (num <= 5) {
  console.log(`Level ${num}`);
  num++;
}
*/

/*
// Infinite loops
while (num <= 5) {
  console.log(`Level ${num}`);
  continue;
  num++;
}

while (num <= 5) {
  console.log(`Level ${num}`);
}

// psw
for (let i = 0; i < 3; i++) {
  process.stdout.write("* ");
}
console.log();
for (let i = 0; i < 3; i++) {
  console.log("*");
}

//////////////////////////////////////////////

// functions
function printer() {
  console.log("Hi I am Anurag");
  console.log("I work at AccioJob");
  console.log("I love teaching");
}

console.log(printer);
console.log(typeof printer);
printer();

// passing parameters to a function
function add(a, b) {
  console.log(a + b);
}

add(2, 3);
add(10, 20);
add(100, 150);

// returning results from a function
function addNew(a, b) {
  const c = a + b;
  return c;
}

const res = addNew(10, 20);
console.log(res);

addNew(100, 150);

function printer() {
  console.log("Hi I am Anurag");
  return;
  console.log("I work at AccioJob");
  console.log("I love teaching");
}

const ans = printer();

const firstName = "Anurag";

function second() {
  let c = 2;
  return c;
}

function first() {
  let a = 1;
  const b = second();
  a = a + b;
  return a;
}

const x = first();
console.log(x);

// global scope
const a = 5;
let firstName = "Anurag";
const year = 2023;

function test() {
  console.log("Inside test func ", a, firstName, year);
}

test();
console.log("Outside test func ", a, firstName, year);

// function scope
function second() {
  console.log(a);
  let c = 2;
  return c;
}

function first() {
  let a = 2;
  const b = second();
  a = a + b;
  return a;
}

const x = first();
console.log(x);


// block / local scope
const birthYear = 1988;
if (1981 <= birthYear && birthYear <= 1990) {
  const oldGen = true;
}
console.log(oldGen);

// how to correct the above
const birthYear = 1988;
let oldGen;
if (1981 <= birthYear && birthYear <= 1990) {
  oldGen = true;
}
console.log(oldGen);

// var with block scope
const birthYear = 1988;
if (1981 <= birthYear && birthYear <= 1990) {
  var oldGen = true;
}
console.log(oldGen);

// var with function scope
function test() {
  var firstName = "anurag";
}

test();
console.log(firstName);


// hoisting
test();
demo();
console.log(currYear);
console.log(example);

function test() {
  console.log("Hi, How are you ?");
}

function demo() {
  console.log("I am a demo function");
}

var currYear = 2023;
let example = "some random example";

// q1
y = 3;
console.log(y);
var y = 100;
console.log(y);

// q2
function example() {
  console.log(a);
}

console.log(a);
var a = 1;
example();

// q3
function first() {
  console.log(1);
}

first();

function first() {
  console.log(2);
}

first();

// q4
var console.log(test);
function test() {
  console.log("Inside the function");
}
console.log(test);

// Arrays - 1
const f1 = "Anjay";
const f2 = "Abhishek";
const f3 = "Aryan";
const f4 = "Priya";
const f5 = "JavaScript";

// 1) how to create an array
const friends = ["Anjay", "Abhishek", "Aryan", "Priya"];
console.log(friends);

// 2) accessing through index
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

// 3) number of elements
console.log(friends.length);

// 4) find the last element
const n = friends.length;
console.log(friends[n - 1]);

// 5) printing all elements in the array
for (let i = 0; i < n; i++) {
  console.log(friends[i]);
}

// 6) changing an element in the array
console.log("Before: ", friends);
friends[1] = "Tarun";
friends[0] = "Roshan";
console.log("After: ", friends);

// 7) adding elements at the back
console.log("Before: ", friends);
friends.push("Anjay");
friends.push("JavaScript");
console.log("After: ", friends);

// 8) arrays can store any data type
function print() {
  console.log("hello");
  return 10;
}

const firstName = "Anurag";
const age = 23;
const job = "Teacher";

const myArr = [firstName, age, job, friends, print, print()];
console.log(myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);
console.log(myArr[4]());
console.log(myArr[5]);

// given myArr, print the number of friends you have
console.log(myArr[3].length);

// given myArr, print the second friend
console.log(myArr[3][1]);

// given myArr, get the last friend
const numFrnds = myArr[3].length;
console.log(myArr[3][numFrnds - 1]);

// How to generate pairs / triplets
const arr = [20, 10, 30, 40, 50];
const n = arr.length;

// i < n or i < n - 1 or i <= n - 2 will give same output
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    console.log(arr[i], arr[j]);
  }
}

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      console.log(arr[i], arr[j], arr[k]);
    }
  }
}

let arr = [1, 3, 5, 7];
console.log(arr);

let brr = [0, 2, 3, 6];
brr[2] = 30;

brr = arr;
arr[2] = 40;
console.log(arr);
console.log(brr);

function incrementNum(num) {
  num++;
}

let num = 5;
incrementNum(num);
console.log(num);

function incrementArr(arr) {
  arr[0]++;
}

let brr = [1, 3, 5, 7];
incrementArr(brr);
console.log(brr);


const arr = [10, 20, 30, 40];
const n = arr.length;

// If you just want to print use prefix string as subarr
for (let start = 0; start < n; start++) {
  let subarr = "";
  for (let end = start; end < n; end++) {
    subarr += arr[end] + " ";
    console.log(start, end, subarr);
  }
}

// generate sum of every subarray
for (let start = 0; start < n; start++) {
  let sum = 0;
  for (let end = start; end < n; end++) {
    sum += arr[end];
    console.log(start, end, sum);
  }
}

// If you want all subarrays in a bigger array
// use prefix array [] as the subarr
function makeCopy(arr) {
  const newarr = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    newarr.push(arr[i]);
  }
  return newarr;
}

const ans = [];
for (let start = 0; start < n; start++) {
  const subarr = [];
  for (let end = start; end < n; end++) {
    subarr.push(arr[end]);
    // push the new array of subarr
    const copy = Array.from(subarr);
    // const copy = makeCopy(subarr);
    ans.push(copy);
  }
}

console.log(ans);

// 2D Arrays
const friends1 = ["Soham", "Tarun", "Abhishek"];
const friends2 = ["Priya", "Debargha", "Anjay", "Shashank"];
const friends3 = ["C++", "JavaScript"];

const allFriends = [friends1, friends2, friends3];
console.log(allFriends);
console.log(allFriends[0]);
console.log(allFriends[1]);
console.log(allFriends[2]);

console.log(allFriends[1][2]);
console.log(allFriends[2][0]);

console.log(friends1);
allFriends[0][0] = "Vaibhav";
console.log(allFriends[0]);
console.log(friends1);


const rows = allFriends.length;
const cols = allFriends[0].length;

console.log(rows);
console.log(cols);
*/

// How to travel and print a print
function printMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      process.stdout.write(matrix[r][c] + " ");
    }
    console.log();
  }
}

function buildMatrix(rows, cols) {
  const matrix = [];
  for (let r = 0; r < rows; r++) {
    // build the smaller array for every row
    const smallArr = [];
    // matrix.push(smallArr)
    // you can also push smallArr here instead after building
    // because changes done to smallArr are reflected
    // in matrix as well because both are looking at
    // same address
    for (let c = 0; c < cols; c++) {
      smallArr.push(c + 1);
    }
    matrix.push(smallArr);
  }

  return matrix;
}

const matrix = buildMatrix(6, 6);
printMatrix(matrix);
