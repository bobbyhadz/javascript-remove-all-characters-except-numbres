// EXAMPLE 1 - Remove all non-numeric characters from String in JavaScript

const str = 'bobby 123 !@#$%^hadz?456._com';

const result = str.replace(/\D/g, '');
console.log(result); // 👉️ 123456

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using a character class instead of the `\D` special character

// const str = 'bobby 123 !@#$%^hadz?456._com';

// const result = str.replace(/[^0-9]/g, '');

// console.log(result); // 👉️ 123456

// ------------------------------------------------------------------

// // EXAMPLE 3 - Leaving dots in the result to preserve floating-point numbers

// const str = 'bobby 123 !@#$%^hadz?.456_com';

// const result = str.replace(/[^\d.]/g, '');
// console.log(result); // 👉️ 123.456

// ------------------------------------------------------------------

// // EXAMPLE 4 - Taking negative numbers into account

// const str = '-bobby 123 !@#$%^hadz?.456_com';

// const result = str.replace(/[^\d.-]/g, '');
// console.log(result); // 👉️ -123.456

// ------------------------------------------------------------------

// // EXAMPLE 5 - Handling multiple dots in the string

// const str = '-124.45.67 $';

// const result = parseFloat(str.replace(/[^\d.-]/g, ''));

// console.log(result); // 👉️ -124.45
