function canYouSpotTheProblem() {
// strict in issuing errors
    "use strict"; 

    for (var count = 0; count < 10; count++) {
        console.log("num")
    }
};

canYouSpotTheProblem();

// Constructor without new keyword 
function Person(name) {
    this.name = name;
}

var ferdinant = Person("Ferdinant");
console.log(name);

// But ....
"use strict";
function Person(name) { this.name = name; }
// Oops, forgot 'new'
var ferdinand = Person("Ferdinand");
// → TypeError: Cannot set property 'name' of undefined
console.log(name);


function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

// Testing function
function testVector() {
  var p1 = new Vector(10, 20);
  var p2 = new Vector(-10, 5);
  var p3 = p1.plus(p2);

  if (p1.x !== 10) return "fail: x property";
  if (p1.y !== 20) return "fail: y property";
  if (p2.x !== -10) return "fail: negative x property";
  if (p3.x !== 0) return "fail: x from plus";
  if (p3.y !== 25) return "fail: y from plus";
  return "everything ok";
}
console.log(testVector());
// → everything ok

function numberToString(number, base) {
  var result = "\n", sign = "";
  if (number < 0) {
    sign = "-";
    number = -number;
  }
  do {
    result = String(number % base) + result;
    number /= base;
  } 
  while (number > 0);
    return sign + result;
}

console.log(numberToString(13, 10));

function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L")
    return "a house";
  else
    return "two angry bears";
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}

// Cleaning up after exceptions
var context = null;

function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  var result = body();
  context = oldContext;
  return result;
}

function withContext(newContext, body) {
  var oldContext = context;
  context = newContext;
  try {
    return body();
  }
  finally {
    context = oldContext;
  }
}

try {
  withContext(5, () => {
    if (context < 10)
      throw new Error("Not enough context!");
  });
} catch(e){
  console.log("Ignoring: " + e);
}
console.log(context);

try { 
  withException(5, () => {
    if (context){
      // Something
    }
  });
}
catch(err){
// Something
}

function InputError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "empty array in lastElement");
  return array[array.length - 1];
}