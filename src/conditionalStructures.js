let age = 23

if (age >= 18) console.log('You are an adult')
else if (age >= 12) console.log('You are a teenager')
else if (age >= 3) console.log('You are a kid')
else if (age >= 0) console.log('You are a baby')
else console.log('That is an incorrect age!')

let option = 'e' // a, b, c, d

switch (option) {
  case 'a':
    console.log('You\'ve selected a option')
    break
  case 'b':
    console.log('You\'ve selected b option')
    break
  case 'c':
    console.log('You\'ve selected c option')
    break
  case 'd':
    console.log('You\'ve selected d option')
    break
  default:
    console.log('Incorrect option!')
}