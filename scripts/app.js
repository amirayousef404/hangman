const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")
// const gameOne = new Hangman("cat", 3)
let gameOne

// puzzleEl.textContent = gameOne.puzzle
// guessEl.textContent = gameOne.statusMessage

// console.log(gameOne.status)

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode)
  gameOne.makeGuess(guess)
  render()
})

const render = () => {
  puzzleEl.innerHTML = ""
  guessEl.textContent = gameOne.statusMessage
  gameOne.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span")
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })
}

const startGame = async () => {
  const puzzle = await getPuzzle("2")
  gameOne = new Hangman(puzzle, 5)
  render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()
// const gameTwo = new Hangman("New Jersey", 8)
// gameTwo.makeGuess("w")
// console.log(gameTwo.getPuzzle())

// getPuzzle((error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`)
//   } else {
//     console.log(puzzle)
//   }
// })

// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle)
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`)
//   })

// getCountry("EG", (error, country) => {
//   if (error) {
//     console.log(`Error: ${error}`)
//   } else {
//     console.log(country.name)
//   }
// })

// getCountry("EG")
//   .then((country) => {
//     console.log(country.name)
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`)
//   })

// getLocation()
//   .then((location) => {
//     return getCountry(location.country)
//   })
//   .then((country) => {
//     console.log(country.name)
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`)
//   })

//   getCurrentCountry().then((country) => {
//     console.log(country.name)
//   }).catch((error) => {
//     console.log(error)
//   })
// challenge
// const countryCode = "US"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     const country = data.find((country) => country.alpha2Code === countryCode)
//     console.log(country.name)
//   } else if (e.target.readyState === 4) {
//     console.log("unable to fetch data")
//   }
// })

// countryRequest.open("GET", "https://restcountries.com/v2/all")
// countryRequest.send()
