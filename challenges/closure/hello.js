// Create Hello World Function
/* Write a function createHelloWorld. It should return a new function that 
always returns "Hello World".
 */

function helloWorld() {
  return function (...args) {
    return "Hello World";
  };
}

console.log(helloWorld()(42));
