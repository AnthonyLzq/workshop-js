const person = {
  name        : 'Anthony',
  lastName    : 'Luzquiños',
  age         : 23,
  email       : 'sluzquinosa@uni.pe',
  job         : 'Developer',
  languages   : ['JavaScript', 'TypeScript', 'Python', 'Java'],
  getData     : () => `My name is ${person.name} ${person.lastName}. I'm ${person.age} years old. I work as a ${person.job}. Mail to me at: ${person.email}`,
  getLanguages: () => {
    const aux = person.languages.reduce((a, language, index, array) => {
      if (index === array.length - 1) return a + `\b\b and ${language}.`

      return a + `${language}, `
    }, 'I know how to program in: ')

    return aux
  }
}

console.log(person.getData())
console.log(person.getLanguages())
