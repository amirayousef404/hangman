const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error("unable to fetch puzzle")
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch(`//restcountries.com/v2/all`)

  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error("unable to fetch data")
  }
}

const getLocation = async () => {
  const response = await fetch("//ipinfo.io/json?token=6f95d542efc08e")

  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error("unable to fetch data")
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country)
}
// const getPuzzle = (wordCount ,callback) => {
//   const request = new XMLHttpRequest()
//   request.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       callback(undefined, data.puzzle)
//     } else if (e.target.readyState === 4) {
//       callback("An error has taken place", undefined)
//     }
//   })
//   request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()
// }

// const getPuzzle = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json()
//       } else {
//         throw new Error("unable to fetch puzzle")
//       }
//     })
//     .then((data) => {
//       return data.puzzle
//     })
// }

//challenge
// const getCountry = (countryCode, callback) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find((country) => country.alpha2Code === countryCode)
//       callback(undefined, country)
//     } else if (e.target.readyState === 4) {
//       callback("unable to fetch data")
//     }
//   })

//   countryRequest.open("GET", "https://restcountries.com/v2/all")
//   countryRequest.send()
// }

// const getCountry = (countryCode) =>
//   new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find(
//           (country) => country.alpha2Code === countryCode
//         )
//         resolve(country)
//       } else if (e.target.readyState === 4) {
//         reject("unable to fetch data")
//       }
//     })

//     countryRequest.open("GET", "https://restcountries.com/v2/all")
//     countryRequest.send()
//   })

// const getCountry = (countryCode) => {
//   return fetch(`https://restcountries.com/v2/all`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json()
//       } else {
//         throw new Error("unable to fetch data")
//       }
//     })
//     .then((data) => data.find((country) => country.alpha2Code === countryCode))
// }

// const getLocation = () => {
//   return fetch("https://ipinfo.io/json?token=6f95d542efc08e").then(
//     (response) => {
//       if (response.status === 200) {
//         return response.json()
//       } else {
//         throw new Error("unable to fetch data")
//       }
//     }
//   )
// }
