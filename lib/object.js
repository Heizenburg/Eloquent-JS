const line = "-------------------------------";
function closure(n){
	return (e) => {
		return e * n;
	}
}

const twice = closure(3);
console.log(`The closure function yields: ${twice(5)}`);


function wrapOne(e){
	var localVar = e;
	return () => {
		return localVar;
	}
}

var wrap1 = wrapOne(5);
var wrap2 = wrapOne(7);

console.log(`The first value from wrapOne: ${wrap1()}`);
console.log(`The second value from wrapOne: ${wrap2()}`);

function multiplier(factor){
	return (number) => {
		return factor * number;
	}
}

var one = multiplier(2);
console.log(`Multiplier : ${one(2)}`);

function findSolution(target){
	function find(start, history){
		if (start == target)
			return history;
		else if (start > target)
			return null;
		else
			return find(start + 5, "(" + history + " + 5) ") 
			|| find(start * 3, "(" + history + " * 3) ");
	}
	return find(1, "1");
}

console.log(findSolution(33));
console.log(line + "DRY'n functions");

// Function not following the dry principle
function printFarmInventory(cows, chickens){
	var cowString = String(cows);
	while(cowString.length < 3)
		cowString = "0" + cowString;
	console.log(cowString + "Cows");
	var chickenString = String(chickens);
	while(chickenString.lenght < 3)
		chickenString = "0" + chickenString;
	console.log(chickenString + "Chickens");
}

printFarmInventory(7,11);

// Function following the dry principle part One
function printZeroPaddedWithLabel(number, label){
	var numberString = String(number);
	while (numberString.length < 3)
		numberString = "0" + numberString;
	console.log(numberString + " " + label);
}

function printFarmInventory(cows, chickens, pigs) {
	printZeroPaddedWithLabel(cows, "cows");
	printZeroPaddedWithLabel(chickens, "chickens");
	printZeroPaddedWithLabel(pigs, "pigs");
}

printFarmInventory(7, 11, 3);

// Absolute DRY
function zeroPad(number, width) {
	var string = String(number);
	while (string.length < width)
		string = "0" + string;
	return string;
}

function printFarmInventory(cows, chickens, pigs){
	console.log(zeroPad(cows, 3) + "Cows");
	console.log(zeroPad(chickens, 3) + "chickens");
	console.log(zeroPad(pigs, 3) + "Pigs");
}
printFarmInventory(7, 16, 3);


console.log(line + "Properties");

var doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());


var mack = ["Default"];
mack.push("Mack");
mack.push("punch", "the smack");

console.log(mack.pop());

console.log(line + "Objects");
// Objects
var day = {
	squirrel: false,
	events: ["work","touched tree","pizza","running","television","radio"]
};

console.log(day.squirrel);
console.log(day.wolf);
day.wolf = false;

console.log(day.wolf);

var anObject = {
	left: 1,
	right: 2
};

console.log(anObject.left);

delete anObject.left;

console.log("left" in anObject);
console.log("right" in anObject);

var map = {};
function storePhi(event, phi) {
	map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("pizza", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);

for (var event in map){
	console.log("The correlation for '" + event +"' is " + map[event]);
} 

console.log(line + "Correlation");

function gatherCorrelation(journal){
	var phis = {};
	for (var entry = 0; entry < journal.length; entry++){
		var events = journal[entry].events;
		for (var i = 0; i < events.length; i++){
			var event = events[i];
			if (!(event in phis))
				phis[event] = phis(tableFor(event, journal));
		}
	}
	return phis;
}

var todolist = [];
function rememberTo(task){
	todolist.push(task);
}
function whatIsNext(){
	return todolist.shift();
}
function urgentlyRememberTo(task){
	todolist.unshift(task);
}

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index){
	return array.slice(0, index)
			.concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 4));

console.log("coconut".indexOf("t"));
console.log("coconut".slice(2, 4));
console.log("   Thato".trim());

console.log(line + "High order functions");

// HIGH ORDER FUNCTIONS
// Abstraction
var total = 0; count = 1;
while(count <= 10){
	total += count;
	count++;
}
console.log(total);

// Same thing but more in line with our problem definition 
//console.log(sum(range(1, 10)));

var total = 0; count = 1;
while (count <= 10){
	total += count;
	count ++;
}

console.log(total);


forEach(["Wampeter","Foma","Granfalloon"], console.log);

var number = [1, 2, 3, 4, 5], sum = 0;
forEach(number, function(number){
	sum += number;
});
console.log(sum);

// Normal
function gatherCorrelations(journal){
	var phis = {};
	for (var entry = 0; entry < journal.length; entry++){
		var events = journal[entry].events;
		for (var i = 0; i < events.length; i++){
			var event = events[i];
			if (!(event in phis))
				phis[event] = phi(tableFor(event, journal));
		}
	}
	return phis;
}

function logEach(array){
	for(count = 0; count < array.length; count++){
		console.log(array[count]);
	}
}

// OR 

function forEach(array, action){
	for(var count = 0; count < array.length; count++){
		action(array[count]);
	}
}

// Abstracted version

function gatherCorrelations(journal){
	var phis = {};
	journal.forEach(function(entry){
		entry.events.forEach(function(event){
			if (!(event in phis))
				phis[event] = phi(tableFor(event, journal));
		});
	});
	return phis;
}

// functions that create new functions
function greaterThan(n){
	return function(m){
		return n * m;
	}
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// functions that change other functions 
function noisy(f){
	return (arg) => {
		console.log("Calling with", arg);
		var value = f(arg);
		console.log("Calling with", arg, "- got", value);
		return value;
	}
}
noisy(Boolean)(0);

// functions that describes new types of control flow
function unless(test, then){
	if (!test) then();
}
function repeat(times, body){
	for(var i = 0; i < times; i++) body(i); 
}

// SO

repeat(5, function(n){
	unless(n % 2, function(){
		console.log(n , "is even");
	});
});

// PARSING OF JSON FILES
var string = JSON.stringify({format: "XML", inception: 1995});
console.log(JSON.parse(string).inception);


console.log(line + "OBJECTS")
// OBJECTS AND METHODS

// simple method
 
var rabbit = {};
rabbit.speak = line => {
	console.log("The rabbit says '" + line + "'");
}

rabbit.speak("I'm alive");


function speak(line){
	console.log(`The ${this.type} , ${this.sex} rabbit says '${line}'`);
}
 var whiteRabbit = {
	 	type: "white",
		 sex: "male",
	   speak: speak 
 };
 var fatRabbit = {
	 	type: "fat",
		 sex: "female",
	   speak: speak
 };
 
 whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
 fatRabbit.speak("I could sure use a nap right now!");

// PROTOTYPES
var empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

var protoRabbit = {
	speak: (line) => {
		console.log(`${this.type}, ${line}`)
	}
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");

// CONSTRUCTORS
function Rabbit(type) {
	this.type = type;
}
 var killerRabbit = new Rabbit("Killer");
 var blackRabbit = new Rabbit("black");

console.log(blackRabbit.type);

Rabbit.prototype.speak = (line) =>{
	console.log(`The ${this.type} rabbit says '${line}'`)
};
Rabbit.prototype.dance = () => {
	console.log(`The ${this.type} rabbit dances a jig.`);
}
blackRabbit.speak("DOOM!");
killerRabbit.dance();

console.log(Array.prototype.toString == 
							Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1, 2]));

var map = {};
function storePhi(event, phi) {
	map[event] = phi;
}
storePhi("Pizza", 0.069);
storePhi("Touched tree", -0.081);

//iterating over phi values
Object.prototype.nonsense = "hi";
for (var name in map){
	console.log(name);
}

Object.defineProperty(Object.prototype, "hiddemNonsense",
					{ enumerable: false, value: "hi"});

for (var name in map){
	console.log(name);
}
console.log(map.hiddenNonsense);
console.log(map.hasOwnProperty("toString"));


console.log(line + "Polymorphism");

function rowHeights(row){
	return row.map(function(row){
		return row.reduce(function(max, cell){
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}

function colWidths(){
	return rows[0].map(function(_, i){
		return rows.reduce(function(max, row){
			return Math.max(max, row[0].minWidth());
		}, 0);
	});
}

// now we draw the table 
function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);

	function drawLine(blocks, lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join(" ");
	}

	function drawRow(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});
		return blocks[0].map(function(_, lineNo) {
			return drawLine(blocks, lineNo);
		}).join("\n");
	}

	return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; i++) 
		result += string;
	 
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line){
		return Math.max(width, line.length);
	}, 0);
}
TextCell.prototype.minHeight = function() {
	return this.text.length;
}
TextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++)
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));

	return result; 
}

var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 5; j++) {
		if ((j + i ) % 2 == 0)
			row.push(new TextCell("##"));
		else
			row.push(new TextCell(" "));
	}
	rows.push(row);
}
console.log(drawTable(rows));

function UnderlineCell(inner) {
	this.inner = inner;
}
UnderlineCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
UnderlineCell.prototype.minHeight = function() {
	return this.inner.minHeight() + 1;
};
UnderlineCell.prototype.draw = function() {
	return this.inner.draw(width, height - 1)
						.concat([repeat("-", width)]);
};

function dataTable(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlineCell(new TextCell(name));
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			return new TextCell(String(row[name]));
		});
	});
	return [headers].concat(body);
}
//console.log(drawTable(dataTable(/*MOUNTAINS*/)));

var pile = {
	elements: ["eggshell", "orange peel", "worm"],
	get height() {
		return this.elements.length;
	}, 
	set height(value) {
		console.log("Ignoring attempt to set height to", value);
	}
};

console.log(pile.height);
pile.height = 100;

Object.defineProperty(TextCell.prototype, "heightProp", {
	get: function(){
		return this.text.length;
	}
});
var cell = new TextCell("no\nway");
console.log(cell.heightProp);
cell.heightProp = 100;
console.log(cell.heightProp);

console.log(line + "INHERITANCE")
// INHERITANCE

function RTextCell(text) {
	TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);
// An RTextCell is now basically equivalent to a TextCell,
// except that its draw method contains a different function.
RTextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result; 
};

function dataTable(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(row){
		return keys.map(function(name){
			var value = row[name];
			// This was changed
			if (typeof value == "number")
				return new RTextCell(string(value));
			else
			return new TextCell(string(value)); 
		});
	});
	return [headers].concat(body);
}
//console.log(drawTable(dataTable(/*MOUNTAINS*/)));

// Determining INHERITANCE
console.log(new RTextCell("A") instanceof RTextCell);
console.log(new RTextCell("A") instanceof TextCell);
console.log(new TextCell("A") instanceof RTextCell);
console.log([1] instanceof Array);

