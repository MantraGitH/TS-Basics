//  * - Create a comment in the code and include the URL of the official website of the programming language you've selected.
//  * - Represent the different syntax for creating comments in the language (single-line, multi-line, etc.).
//  * - Create a variable (and a constant if the language supports it).
//  * - Create variables representing all the primitive data types of the language (strings, integers, booleans, etc.).
//  * - Print to the terminal the text: "Hello, [and the name of your language]!"

// ---

// Typescript official website: https://www.typescriptlang.org/

/*
    This is an example of how to make a multi-line comment
    in Typescript
*/

// Let
let principalCharacter: string = "Harry Potter";

// Const
const broom: string = "Nimbus 2000";

// Primitive Data Types in Typescript:

// String

let HouseHogwarts: string = "Gryffindor";

// Number

let HarryAge: number = 17;

// Boolean

let HasWand: boolean = true;

// Null

let patronus: null = null; // He hasn't invoked his Patronus yet.

// Undefined

let spell: undefined; // Spell not assigned yet.

// Symbol

let magicObject: symbol = Symbol("Elixir of life");

// Show on terminal:

console.log(`Hello, ${principalCharacter}`);
console.log(`Your broom is ${broom}`);
console.log(`Your house is ${HouseHogwarts}`);
console.log(`Age: ${HarryAge}`);
console.log(`Does he have a wand? ${HasWand}`);
