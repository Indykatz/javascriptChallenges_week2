// Write a function that return a string backwards

// Arrow Function
const reverseString1 = (aString) => {
  let arrayText = aString.split("");
  let reverseText = arrayText.reverse();
  let joinText = reverseText.join("");
  return joinText;
};

console.log(reverseString1("This is a test string"));

// simplified
const reverseString2 = (aString) => {
  return aString.split("").reverse().join("");
};
console.log(reverseString2("This is a test string"));
