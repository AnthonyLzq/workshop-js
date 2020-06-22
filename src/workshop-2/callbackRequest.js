// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const { XMLHttpRequest } = require('xmlhttprequest')
const API = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url, callback) => {
  const http = new XMLHttpRequest()
  http.open('GET', url, true)

  http.onreadystatechange = () => {
    if (http.readyState === 4) {
      if (http.status === 200)
        callback(null, JSON.parse(http.responseText))
      else {
        const error = new Error('Error getting the info')
        callback(error, null)
        // callback(new Error('Error getting the info'), null)
      }
    }
  }

  http.send()
}

fetchData(API, (error1, data1) => {
  if (error1) console.log(error1)

  fetchData(`${API}${data1.results[1].id}`, (error2, data2) => {
    if (error2) console.log(error2)

    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) console.log(error3)

      console.log(`Number of characters in the API: ${data1.info.count}`)
      console.log(`Character name: ${data2.name}`)
      console.log(`Character dimension: ${data3.dimension}`)
    })
  })
})
