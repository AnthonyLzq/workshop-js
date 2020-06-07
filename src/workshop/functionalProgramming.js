let sayHello = function (person) {
  console.log(`Hello ${person}`)
}

let sayBye = function (person) {
  console.log(`Bye ${person}`)
}

function saySomething(person, tmpFunction) {
  tmpFunction(person)
}

// function sayHello(person) {
//   console.log(`Hello ${person}`)
// }

// let name = "Diego"
// saySomething(name, sayBye)

// let sum = (a, b) => a + b

// function sum(a, b) {
//   //   return a + b
//   //   console.log("The sum is: " + (a + b))
//   return a + b
// }

// // console.log(sum(5, 3))
// let a = sum(5, 8)

const numbers = [1, 2, 3, 4, 5, 6, 7]

// let numbers2 = numbers.map((e) => {
//   return e * 2
// })

const numbers2 = numbers.map(number => number*2)

const numbers3 = numbers.filter(number => number % 2 === 1)

const numbers4 = numbers.reduce((sum, number) => {
  if (number % 2 === 1) return sum + number

  return sum
}, 0)

console.log(numbers)
console.log(numbers2)
console.log(numbers3)
console.log(numbers4)

// numbers.forEach((element, index) => {
//   if (element % 2 == 0) {
//     numbers[index] = element * 2
//   }
// })

