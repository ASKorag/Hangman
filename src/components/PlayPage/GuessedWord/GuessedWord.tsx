import React from 'react'
//import s from './GuessedWord.module.css'

type T = {
  guessedWord: string[]
}

export const GuessedWord: React.FC<T> = ({ guessedWord }) => {
  const op = guessedWord.map((letter, index) => {
    return (
      <span className="ueu" key={index}>
        {letter}
      </span>
    )
  })
  return <>{op}</>
}
