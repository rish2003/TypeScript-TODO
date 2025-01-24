function hello(name: string) {
  console.log("Hello" + name);
}

hello("John");

//write a function that takes another function as an argument and calls it

function callMe(fn: () => void) {
  setTimeout(fn, 1000);
}

callMe(() => console.log("Hello"));
