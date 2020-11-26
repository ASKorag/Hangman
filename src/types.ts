export type TSettings = {
  difficultyWords: string
  mistakesLimit: number
}

export type TGameVariables = {
  isPlaying: boolean
  sourcedWord: string
  guessedWord: string[]
  checkedLetters: string[]
  mistakesCounter: number
  lettersLeft: number
}
