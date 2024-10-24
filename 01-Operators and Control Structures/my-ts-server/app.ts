// * - Create examples using all types of operators in your language:
// *   Arithmetic, logical, comparison, assignment, identity, membership, bitwise...
// *   (Keep in mind that each language might have different ones)
// * - Using operations with any operators you want, create examples
// *   that represent all types of control structures that exist
// *   in your language:
// *   Conditionals, loops, exceptions...
// * - You must print the result of all the examples to the console.
// *
// * EXTRA DIFFICULTY (optional):
// * Create a program that prints to the console all the numbers between
// * 10 and 55 (inclusive) that are even, and are neither 16 nor multiples of 3.

// Breaking Bad Characters Declaration
let walterWhite = "Walter White";
let jessePinkman = "Jesse Pinkman";
let heisenberg = "Heisenberg";
let saulGoodman = "Saul Goodman";
let gustavoFring = "Gustavo Fring";

// Operators

//Arithmetic

let productSold = 20; // Kg of product
let productProduced = 15;
let total = productSold + productProduced; // Addition
console.log(`Total product: ${total} kg`);

// ^^^^ The quantity of productSold and productProduced is added to obtain the total product

let difference = productSold - productProduced; // Subtraction
console.log(`Product Difference: ${difference} kg`);

// ^^^^ the product sold is subtracted from the product produced to obtain the difference

let pricePerKg = 10000; // Price per kilo in dollars
let profit = productSold * pricePerKg; // Multiplication
console.log(`Total profit: $${profit}`);

// ^^^^ we multiply the product sold by  the price per kilo to calculate the profit

let profitPerPerson = profit / 2; // Division
console.log(`Profit per person (Walter and Jesse): $${profitPerPerson}`);

// ^^^^ the profit is divided between two people (W and J)

let remainingProduct = productSold % 3; // Modulus
console.log(
  `Remaining product after splitting in thirds: ${remainingProduct} kg`
);

// ^^^^  the % operator (module) obtains the remainder by dividing the product sold by 3, which represents the amount remaining after dividing it into thirds

// Logical

// Logical operators allow you to evaluate multiple conditions and operate on boolean values ​​(true or false).
let isHeisenberg = walterWhite === heisenberg; // Identity
console.log(`Is Walter Heisenberg?: ${isHeisenberg}`);

// ^^^^ The === operator compares whether W.W. is exactly the same as Heisenberg. In this case, it is false because they are different text strings

let hasProduct = productSold > 0;
let hasMoney = profit > 0;
let stillInBusiness = hasProduct && hasMoney; // Logical AND
console.log(`Is Walter still in business?: ${stillInBusiness}`);

// ^^^^ we use the && operator (logical AND) to evaluate wheter Walter is still in business. If you have product and money, the variable stillinBusiness will be true

let jesseRepentant = false;
let jesseInTrouble = !jesseRepentant; // Negation
console.log(`Is Jesse in trouble?: ${jesseInTrouble}`);

// ^^^^ the operator! (denial) inverts the boolean value of jesseRepentant. Since Jesse is not sorry (false), jesseinTrouble will be true

// Comparison
console.log(
  `Does Gustavo have more product than Walter?: ${
    productProduced > productSold
  }`
);

// ^^^^ the operator > comparer whether Gustavo has produced more product than Walter has sold. The result will be false or true depending on the values

// Assignment operators
let deathCount = 0;
deathCount += 1; // Increment deaths
console.log(`Deaths so far: ${deathCount}`);

deathCount *= 2; // Double the deaths
console.log(`Deaths after explosion: ${deathCount}`);

// ^^^^ += increase the deathCount value by 1, and *= multiplies the current value by 2, simulating a rapid increase in deaths in a dramatic event

// Bitwise operators (using the number of episodes as an example)
let season1Episodes = 7;
let season2Episodes = 13;
let totalEpisodes = season1Episodes | season2Episodes; // Bitwise OR
console.log(`Total combisned episodes (bitwise OR): ${totalEpisodes}`);

// ^^^^ the operator | (Bitwise OR) combines the bits of the two numbers. In this case, it unites the episodes of season 1, and 2

// ------------------- Control Structures -------------------

// Conditional
if (walterWhite === heisenberg) {
  console.log("Walter has fully embraced his Heisenberg identity.");
} else {
  console.log("Walter is not fully Heisenberg yet.");
}

// ^^^^ if Walter and Heisenberg are the same, it prints that Walter has embraced his Heisenberg identity, otherwise it says not yet.

// For loop (to simulate product production by day)
for (let day = 1; day <= 7; day++) {
  console.log(`Day ${day}: Walter produces more product.`);
}

// ^^^^ the for loop repeats 7 times (simulating Walter's daily production of product)

// While loop (while Jesse is still in trouble)
let jesseTrouble = true;
let escapeAttempts = 0;
while (jesseTrouble && escapeAttempts < 3) {
  escapeAttempts++;
  console.log(`Jesse's escape attempt #${escapeAttempts}`);
  if (escapeAttempts === 3) {
    jesseTrouble = false;
    console.log("Jesse has successfully escaped.");
  }
}

// ^^^^ while run the code block while Jese is still in trouble and has not tried to escape more than 3 times

// Do-while loop (Saul looking for clients)
let newClients = 0;
do {
  newClients++;
  console.log(`Saul gets one more client. Total: ${newClients}`);
} while (newClients < 5);

// ^^^^ in this loop, Saul continues searching  for customers until he gets at least 5. It is executed at least once because the condition is checked after the code block is executed

// Exception handling (using ricin)
function useRicin(character: string) {
  if (character === "Gustavo Fring") {
    throw new Error("You can't use ricin on Gustavo Fring, he's too smart.");
  }
  console.log(`${character} has been poisoned with ricin.`);
}


try {
  useRicin("Gustavo Fring");
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.log(`ty`);
  }
}

// ^^^^ the useRicin function throws an error if you try to use ricin on Gustavo Fring. The try-catch block catcher and handles that error, displaying a message in the console

console.log("Numbers between 10 and 55, even, not 16 and not multiples of 3:");
for (let i = 10; i <= 55; i++) {
  if (i !== 16 && i % 2 === 0 && i % 3 !== 0) {
    console.log(i);
  }
}

// ^^^^ This loop print even numbers between 10 and 55 that are not 16 or multiples of 3. It uses i % 2 === 0 to verify that the number is even, i % 3 !== 0 to avoid multiples of 3, and i !== 16 to avoid the number 16