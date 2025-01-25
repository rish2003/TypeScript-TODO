import { StringLiteral } from "typescript";

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

function ageCalc(user1: User, user2: User) {
  return user1.age + user2.age;
}

// const age = ageCalc({ name: "Rishabh", age: 20 }, { name: "Raj", age: 21 });

// console.log(age);

//pick -> pick allows us to create a new type by selecting a set of properties
// (keys) from an existing (type)

interface User2 {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

type UserProfile = Pick<User2, "name" | "email">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

const user: User2 = {
  id: 1,
  name: "Rishabh",
  email: "rishabh@email.com",
  createdAt: new Date(),
};

const userProfile: UserProfile = {
  name: "Raj",
  email: "raj@gmail.com",
};

displayUserProfile(user);

//Partial -> Partial makes all properties of a type with the same properties, but each marked as optional.

interface User3 {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}

type UpdateProps = Pick<User3, "name" | "age" | "email">;

type UpdatePropsOptional = Partial<UpdateProps>;

function updateUser(updatedProps: UpdatePropsOptional) {
  //hit the db to update the user
}

updateUser({});


