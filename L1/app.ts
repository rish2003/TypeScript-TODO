function add(a, b, printResult, someText) {
  //   if (typeof a === "number" && typeof b === "number") {
  //     return a + b;
  //   } else {
  //     return +a + b;
  //   }
  if (printResult) {
    console.log("".concat(someText, " ").concat(a + b));
  }
  return a + b;
}

const n1 = 20;
const n2 = 30;

const printResult = true;
const someText = "Sum of two numbers is = ";

add(n1, n2, printResult, someText);
// console.log(ans);
