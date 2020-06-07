const array = [1, 2, 3, 4]
console.log(array[0])

array.push('Anthony')
console.log(array)

const x = array.pop()
console.log(array, x)

array.push(2)
console.log(array)
const indexOf2 = array.indexOf(2)
console.log(indexOf2)

array[3] = 8
console.log(array)

console.log(`Length: ${array.length}`)

for (let i = 0; i < array.length; i++)
  console.log(array[i])
