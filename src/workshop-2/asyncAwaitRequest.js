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

const asyncFunction = async url =>{
  try {
    const initialData = await fetchData(url)
    const numberOfCharacters = initialData.info.count

    const secondData = await fetchData(`${url}${initialData.results[1].id}`)
    const characterName = secondData.name

    const thirdData = await fetchData(secondData.origin.url)
    const dimension = thirdData.dimension

    console.log(`Number of characters: ${numberOfCharacters}`)
    console.log(`Character name: ${characterName}`)
    console.log(`Character dimension: ${dimension}`)
  } catch (error) {
    console.error(error)
  }
}

asyncFunction(API)
