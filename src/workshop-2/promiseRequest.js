// const somethingWillHappen = value => {
//   return new Promise((resolve, reject) => {
//     if (value) resolve('Everything went ok')
//     else reject('Everything went wrong')
//   })
// }

// console.log('Hi')
// somethingWillHappen(Math.round(Math.random()))
//   .then(response => console.log(response))
//   .catch(error => console.error(error))
// for(let i = 0; i < 100000000000; i++) {}

const { XMLHttpRequest } = require('xmlhttprequest')
const API = 'https://rickandmortyapi.com/api/character/'

const fetchData = url => {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest()
    http.open('GET', url, true)
  
    http.onreadystatechange = () => {
      if (http.readyState === 4) {
        if (http.status === 200)
          resolve(JSON.parse(http.responseText))
        else {
          const error = new Error('Error getting the info')
          reject(error)
        }
      }
    }
  
    http.send()
  })
}

fetchData(API)
  .then(response => {
    const numberOfCharacters = response.info.count
    console.log(`Number of characters in the API: ${numberOfCharacters}`)
    return fetchData(`${API}${response.results[1].id}`)
  })
  .then(response => {
    const name = response.name
    console.log(`Character name: ${name}`)
    return fetchData(response.origin.url)
  })
  .then(response => {
    const dimension = response.dimension
    console.log(`Character dimension: ${dimension}`)
  })
  .catch(error => {
    console.error(error)
  })
