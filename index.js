//Topic: For loop 
//What will be the output of the following code?

for (let i = 0; i < 2; i++) {
  console.log(i);
}
{
  let i = 0;
  console.log(i);
}
{
  let i = 1;
  console.log(i);
}
//Topic: For loop , hoisting
// What will be the output of the following code?

for (var i = 0; i < 2; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//Topic: hoisting
// What will be the output of the following code?

function sayHi() {
  var name;
  console.log(name);
  console.log(age);
  name = "Lydia";
  let age = 21;
}
sayHi();

//Topic: array and objects
// What will be the output of the following code?

let arr = [1, 2, 3, 4];
let obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
};

console.log(arr[0] === obj[0]);

//Topic: Objects
// What will be the output of the following code?

let c = {
  greeting: "Hey!",
  key2: {
    1: 2,
  },
};
let d;
d = c;
c.greeting = "Hello";
console.log(d.greeting);

//Topic: Objects
// What will be the output of the following code?

let e = {
  greeting: "Hey1!",
  // key2: c.key2
  key2: {
    // ...c.key2
    1: 2,
  },
};
e.key2[1] = "one";
console.log(key2);

//Topic: Objects
// What will be the output of the following code?

let c = {
  greeting: "Hey!",
  key2: {
    1: 2,
  },
};

JSON.parse(JSON.stringify(c));

let d1;
d1 = c;
c.greeting = "Hello";
console.log(d1.greeting);

//Topic: Rest operator
// What will be the output of the following code?

function sum(num1, num2, ...rest) {
  console.log(num1, num2, rest);
}
sum(1, 2, 3, 4, 5);

//Topic: array methods
// What will be the output of the following code?

let array = [1, 2, 3, 4];
array.forEach((element, index) => {
  console.log(index);
  return;
});
  
