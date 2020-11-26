import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import { MainPage } from './components/MainPage/MainPage'
import { SettingsPage } from './components/SettingsPage/SettingsPage'
import { AboutPage } from './components/AboutPage/AboutPage'
import './Hangman.css'
import { PlayPage } from './components/PlayPage/PlayPage'
import { words } from './words'

import type { TSettings, TGameVariables } from './types'

declare global {
  interface Window {
    settings: any
    variables: any
  }
}

const Hangman: React.FC = () => {
  const [gameVariables, setGameVariables] = useState<TGameVariables>({
    isPlaying: false,
    sourcedWord: '',
    guessedWord: [],
    checkedLetters: [],
    mistakesCounter: 0,
    lettersLeft: 10,
  })
  const [settings, setSettings] = useState<TSettings>({
    difficultyWords: 'medium',
    mistakesLimit: 8,
  })

  useEffect(() => {
    console.clear()
    console.log(JSON.stringify(settings, null, 2))
    console.log(JSON.stringify(gameVariables, null, 2))
  }, [settings, gameVariables])

  useEffect(() => {
    if (gameVariables.mistakesCounter === settings.mistakesLimit) {
      alert('Игра окончена')
    }
    if (gameVariables.lettersLeft === 0) {
      alert('Поздравляю, Вы победили')
    }
  }, [
    gameVariables.lettersLeft,
    gameVariables.mistakesCounter,
    settings.mistakesLimit,
  ])

  const startGame = () => {
    setGameVariables({
      ...gameVariables,
      isPlaying: true,
    })
  }

  const initGameVariables = (words: string[]) => {
    const randomNumber: number = Math.floor(Math.random() * words.length)
    const word: string = words[randomNumber]
    setGameVariables({
      ...gameVariables,
      sourcedWord: word,
      guessedWord: Array(word.length).fill(' '),
      lettersLeft: word.length,
      mistakesCounter: 0,
    })
  }

  window.settings = settings || {}
  window.variables = gameVariables || {}

  return (
    <div className="hangman">
      <Route
        render={() => (
          <MainPage isPlaying={gameVariables.isPlaying} startGame={startGame} />
        )}
        path="/"
        exact
      />
      <Route
        render={() => (
          <SettingsPage
            difficultyWords={settings.difficultyWords}
            mistakesLimit={settings.mistakesLimit}
            setSettings={setSettings}
          />
        )}
        path="/settings"
      />
      <Route render={() => <AboutPage />} path="/about" />
      <Route
        render={() => (
          <PlayPage
            settings={settings}
            gameVariables={gameVariables}
            words={words['medium']}
            setGameVariables={setGameVariables}
          />
        )}
        path="/play"
      />
    </div>
  )
}

export default Hangman
