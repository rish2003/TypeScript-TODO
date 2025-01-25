function hello(name: string) {
  console.log("Hello" + name);
}

hello("John");

//write a function that takes another function as an argument and calls it

function callMe(fn: () => void) {
  setTimeout(fn, 1000);
}

callMe(() => console.log("Hello"));

//interface

function greet(user: { name: string; age: number }) {
  console.log(`Hello ${user.name}, you are ${user.age} years old`);
}

let user1 = {
  name: "John",
  age: 25,
};

greet(user1);

//interface -> creating our own datatype, just like class and struct in c++

interface User {
  firstname: string;
  lastname: string;
  age: number;
}

function greet2(user: User) {
  console.log(
    `Hello ${user.firstname} ${user.lastname}, you are ${user.age} years old`
  );
}
let user: User = {
  firstname: "John",
  lastname: "Doe",
  age: 25,
};

//create a function isLegal that returns true or false if a user is above 18

interface UserPart3 {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

(user: UserPart3) => {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
};

interface People {
  name: string;
  age: number;
  // greet3: () => string;
}

//creating a class of interface people

const person: People = {
  name: "John",
  age: 25,
  // greet3: () => "Hello",
};

class Manager implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}


//types and union and intersection in types

