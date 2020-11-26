import React, { ChangeEvent } from 'react'

type T = {
  guessedLetter: string
  checkedLetters: string[]
  setGuessedLetter: (newGuessedLetter: string) => void
}

export const GuessedLetter: React.FC<T> = ({
  guessedLetter,
  checkedLetters,
  setGuessedLetter,
}) => {
  const onChangeGuessedLetter = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    const letter: string = value.substr(-1, 1).toLowerCase()

    if (!checkedLetters.includes(letter, 0) && letter.match(/[а-я]/)) {
      setGuessedLetter(letter)
    }
  }
  return (
    <input type="text" value={guessedLetter} onChange={onChangeGuessedLetter} />
  )
}
