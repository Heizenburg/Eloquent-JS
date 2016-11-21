console.log(/[0123456789]/.test("3421992"));
// → true
console.log(/[0-9]/.test("1923492"));

/* 

\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline

*/

function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[3]),
                  Number(match[2]) - 1,
                  Number(match[1]));
}
console.log(findDate("30-1-2003"));

var stock = "1 , 2 , and 101 ";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs

function forEach(array, action) {
    for (var count = 0; count < array.length; count++) {
        action(count[array]);
    }
}

function parseINI(string) {
  // Start with an object to hold the top-level fields
  var currentSection = {name: null, fields: []};
  var categories = [currentSection];

  string.split(/\r?\n/).forEach(function(line) {
    var match;
    if (/^\s*(;.*)?$/.test(line)) {
      return;
    } else if (match = line.match(/^\[(.*)\]$/)) {
      currentSection = {name: match[1], fields: []};
      categories.push(currentSection);
    } else if (match = line.match(/^(\w+)=(.*)$/)) {
      currentSection.fields.push({name: match[1],
                                  value: match[2]});
    } else {
      throw new Error("Line '" + line + "' is invalid.");
    }
  });

  return categories;
}

/* 

/abc/	A sequence of characters
/[abc]/	Any character from a set of characters
/[^abc]/	Any character not in a set of characters
/[0-9]/	Any character in a range of characters
/x+/	One or more occurrences of the pattern x
/x+?/	One or more occurrences, nongreedy
/x* /	Zero or more occurrences
/x?/	Zero or one occurrence
/x{2,4}/	Between two and four occurrences
/(abc)/	A group
/a|b|c/	Any one of several patterns
/\d/	Any digit character
/\w/	An alphanumeric character (“word character”)
/\s/	Any whitespace character
/./	Any character except newlines
/\b/	A word boundary
/^/	Start of input
/$/	End of input


*/

