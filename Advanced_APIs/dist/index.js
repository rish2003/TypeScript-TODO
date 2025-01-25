"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ageCalc(user1, user2) {
    return user1.age + user2.age;
}
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};
const user = {
    id: 1,
    name: "Rishabh",
    email: "rishabh@email.com",
    createdAt: new Date(),
};
const userProfile = {
    name: "Raj",
    email: "raj@gmail.com",
};
displayUserProfile(user);
function updateUser(updatedProps) {
    //hit the db to update the user
}
updateUser({});
