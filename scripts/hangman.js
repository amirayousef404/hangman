class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ["c"]
    this.status = "playing"
  }

  calcStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    )

    if (this.remainingGuesses === 0) {
      this.status = "failed"
    } else if (finished) {
      this.status = "finished"
    } else {
      this.status = "playing"
    }
  }

  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}".`
    } else {
      return `Great work! You guessed the word.`
    }
  }

  get puzzle() {
    let puzzle = ""
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter
      } else {
        puzzle += "*"
      }
    })

    return puzzle
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()

    if (this.status !== "playing") {
      return
    }

    if (!this.guessedLetters.includes(guess)) {
      this.guessedLetters.push(guess)
      if (!this.word.includes(guess)) {
        this.remainingGuesses--
      }
    }
  }
}
