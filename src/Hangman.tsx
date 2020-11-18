import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import { MainPage } from './components/MainPage/MainPage'
import { SettingsPage } from './components/SettingsPage/SettingsPage'
import { AboutPage } from './components/AboutPage/AboutPage'
import './Hangman.css'

declare global {
  interface Window {
    settings: any
    variables: any
  }
}

type TGameVariables = {
  sourcedWord: string
  guessedWord: string[]
  wrongLetters: string[]
  correctLetters: string[]
  mistakesCounter: number | null
  lettersLeft: number | null
}

type TSettings = {
  difficultyWords: string
  mistakesLimit: number
}

const Hangman: React.FC = () => {
  const [gameVariables, setGameVariables] = useState<TGameVariables>({
    sourcedWord: '',
    guessedWord: [],
    wrongLetters: [],
    correctLetters: [],
    mistakesCounter: null,
    lettersLeft: null,
  })
  const [settings, setSettings] = useState<TSettings>({
    difficultyWords: 'medium',
    mistakesLimit: 8,
  })

  useEffect(() => {
    console.log(JSON.stringify(settings, null, 2))
  }, [settings])

  const onSetSettings = (newSettings: TSettings) => {
    setSettings({
      difficultyWords: newSettings.difficultyWords,
      mistakesLimit: newSettings.mistakesLimit,
    })
  }

  window.settings = settings || {}
  window.variables = gameVariables || {}

  return (
    <>
      <Route render={() => <MainPage isPlaying={false} />} path='/' exact />
      <Route
        render={() => (
          <SettingsPage
            difficultyWords={settings.difficultyWords}
            mistakesLimit={settings.mistakesLimit}
            onSetSettings={onSetSettings}
          />
        )}
        path='/settings'
      />
      <Route render={() => <AboutPage />} path='/about' />
    </>
  )
}

export default Hangman
