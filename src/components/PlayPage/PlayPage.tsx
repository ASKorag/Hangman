import React, { useState, useEffect } from 'react'
import { GuessedWord } from './GuessedWord/GuessedWord'
import { GuessedLetter } from './GuessedLetter/GuessedLetter'
import type { TSettings, TGameVariables } from '../../types'

//import s from './PlayPage.module.css'

type T = {
  settings: TSettings
  gameVariables: TGameVariables
  words: string[]

  setGameVariables: (newGameVariables: TGameVariables) => void
}

export const PlayPage: React.FC<T> = ({
  settings,
  gameVariables,
  words,
  setGameVariables,
}) => {
  const [guessedLetter, setGuessedLetter] = useState('')
  useEffect(() => {
    console.log(JSON.stringify(guessedLetter, null, 2))
  }, [guessedLetter])

  const initGameVariables = (words: string[]) => {
    const randomNumber: number = Math.floor(Math.random() * words.length)
    const word: string = words[randomNumber]
    setGameVariables({
      ...gameVariables,
      sourcedWord: word,
      guessedWord: Array(word.length).fill(''),
      lettersLeft: word.length,
      mistakesCounter: 0,
    })
  }

  const checkLetter = (letter: string) => {
    const array: string[] = gameVariables.guessedWord
    let hitCounter: number = 0
    if (guessedLetter) {
      for (let i = 0; i < gameVariables.sourcedWord.length; i++) {
        if (gameVariables.sourcedWord[i] === letter) {
          array[i] = letter
          hitCounter++
        }
      }

      if (!hitCounter) {
        setGameVariables({
          ...gameVariables,
          mistakesCounter: gameVariables.mistakesCounter + 1,
          checkedLetters: [...gameVariables.checkedLetters, letter],
        })
        setGuessedLetter('')
      } else {
        setGameVariables({
          ...gameVariables,
          guessedWord: array,
          checkedLetters: [...gameVariables.checkedLetters, letter],
          lettersLeft: gameVariables.lettersLeft - hitCounter,
        })
        setGuessedLetter('')
      }
    }
  }

  return (
    <div className="idi">
      <button onClick={() => initGameVariables(words)}>Случайное слово</button>
      <GuessedWord guessedWord={gameVariables.guessedWord} />
      <GuessedLetter
        guessedLetter={guessedLetter}
        checkedLetters={gameVariables.checkedLetters}
        setGuessedLetter={setGuessedLetter}
      />
      <button onClick={() => checkLetter(guessedLetter)}>
        Проверить букву
      </button>
      <div>{`Попыток осталось: ${
        settings.mistakesLimit - gameVariables.mistakesCounter
      }`}</div>
    </div>
  )
}
