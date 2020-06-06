let number = 0

while (number < 50) {
  console.log('Current number: ' + ++number)
  // number = number + 1
  // number += 1
  // number++
  if (number === 30) break
}

for (let i = 0; i < 50; ++i)
  console.log('Current number: ' + i)

let i = 0

do {
  console.log('Current number: ' + ++i)
} while(i < 0)
