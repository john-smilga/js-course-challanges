/*

## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters
4. create 3 vars "order1","order2","order3"
5. call "calculateTotal", pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression 

*/

// function calculateTotal(subTotal, tax) {
//   // const total = subTotal + tax;
//   // return total;

//   return subTotal + tax;
// }
const calculateTotal = function (subTotal, tax) {
  // const total = subTotal + tax;
  // return total;

  return subTotal + tax;
};

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(39, 15);

console.log(order1, order2, order3);
