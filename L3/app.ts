// let firstname : string;
// let age : number;
// firstname = "Rishabh";
// age = 21;

// const person : {
//     firstName:string;
//     age:number;
// } = {
//     firstName:"Rishabh",
//     age:21,
// }

//! UNION, | -> pipe in Typescript

// function combine(num1 : number | string, num2 : number | string){
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         result = num1 + num2;
//     } else {
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }

// const sum = combine(10,20); // 30
// const combinedName = combine("Risahbh", " Raj"); // Rishabh Raj
// console.log(sum, combinedName);

//! LITERAL TYPES

// function combine(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
//     let result;
//     if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
//         result = +num1 + +num2;
//     } else {
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }

// const sum1 = combine("10", "20", "as-number"); // 30
// const sum2 = combine(10, 50, "as-number");
// const combinedName = combine("Rishabh", " Raj", "as-string"); // Rishabh Raj
// console.log(sum1, sum2, combinedName);

// TYPE ALIAS / CUSTOM TYPES

type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine(
  num1: Combinable,
  num2: Combinable,
  conversionType: ConversionType
) {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum1 = combine("10", "20", "as-number"); // 30
const sum2 = combine(10, 50, "as-number");
const combinedName = combine("Rishabh", "Raj", "as-string"); // Patel MernStack
console.log(sum1, sum2, combinedName);

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Rishabh",
  age: 21,
  skills: ["React", "Node"],
};

function greet(user: User) {
  console.log(`Hi, I am ${user.name}`);
}
greet(user);
