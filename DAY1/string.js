let singleQuotes = "single quotes ki string";
let doubleQuotes = "double quotes ki string";
console.log(singleQuotes);
console.log(doubleQuotes);
let char = singleQuotes.charAt(4);
let subStr = singleQuotes.substring(2, 8);
console.log(subStr);
console.log(char);
let ascii = singleQuotes.charAt(4);
console.log(ascii);
let arrStr = singleQuotes.split("i");
console.log(arrStr);
let str = arrStr.join("$");
console.log(str);
singleQuotes = singleQuotes.trim();
