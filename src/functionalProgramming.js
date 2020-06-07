let sayHello = function (person) {
  console.log(`Hello ${person}`);
};

let sayBye = function (person) {
  console.log(`Bye ${person}`);
};

function saySomething(person, tmpFunction) {
  tmpFunction(person);
}

// function sayHello(person) {
//   console.log(`Hello ${person}`);
// }

// let name = "Diego";
// saySomething(name, sayBye);

// let sum = (a, b) => a + b;

// function sum(a, b) {
//   //   return a + b;
//   //   console.log("SUMA ES: " + (a + b));
//   return a + b;
// }

// // console.log(sum(5, 3));
// let a = sum(5, 8);

let numbers = [1, 2, 3, 4, 5, 6, 7];

let numbers2 = numbers.map((e) => {
  return e * 2;
});

console.log(numbers);
console.log(numbers2);
// numbers.forEach((element, index) => {
//   if (element % 2 == 0) {
//     numbers[index] = element * 2;
//   }
// });
