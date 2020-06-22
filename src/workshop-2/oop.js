class Person {
  constructor (name, lastName, age, gender) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }

  birthday () {
    this.age++
  }

  toString () {
    // Many lines of code
    return `Hi! My name is ${this.name} ${this.lastName}. I'm ${this.age} years old.`
  }
}

class Developer extends Person {
  constructor (name, lastName, age, gender, languages) {
    super(name, lastName, age, gender)
    this.languages = languages
  }

  getLanguages () {
    let stringOfLanguages = ''

    this.languages.forEach((language, index, array) => {
      if (index === array.length - 1)
        stringOfLanguages += `${language}.\n`
      else if (index === array.length - 2)
        stringOfLanguages += `${language} and `
      else
        stringOfLanguages += `${language}, `
    })

    return stringOfLanguages
  }

  toString () {
    return `${super.toString()} I know how to program in: ${this.getLanguages()}`
  }
}

const dev1 = new Developer('Anthony', 'Luzquiños', 23, 'M', ['TypeScript', 'Node.js', 'Java', 'Python'])
console.log(`${dev1}`)
