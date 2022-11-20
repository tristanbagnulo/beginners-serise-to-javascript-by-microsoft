const place = "World";
const greeting = "Hello";
console.log("Logged: " + greeting + " " + place);
//Substitutions
console.log("%s %s!", greeting, place);

//Below are Template Literals - more human-readable because the inserted logic is in correct place.
//In other words, template literals allow you to combine text and programmatic valuables. 
console.log(`${greeting} ${place} backticks`);


//Variable Declaration

// 'var' makes variables available anywhere within the function i.e. Function Scoped. It can be changed also within the scope.
 
// 'let' is Block Scoped. Can only be used after its declaration (that line & downwards, not within the function). 
// Can be reassigned.

// 'const' also Block Scoped. Cannot be reassigned.

// Which should you use? Use 'const' by default to eliminate some bugs that may be caused by variable reassignment.
// Then, use 'let' if reassignment is necessary but restricts it's use until after it is declared. 
// Now, there isn't really a need to use 'var'.

console.log(hello);
var hello = "Hello";
// ^ prints "undefined" to console


// console.log(helloTwo);
// let helloTwo = "Hello";
// ^ Throws ReferenceError: Cannot access 'helloTwo' before initialization

// console.log(helloThree);
// let helloThree = "Hello";
// ^ Like let, Throws ReferenceError: Cannot access 'helloThree' before initialization

