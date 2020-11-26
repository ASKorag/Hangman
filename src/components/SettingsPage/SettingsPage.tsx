import React, { ChangeEvent, useState } from 'react'
import type { TSettings } from '../../types'

type TProps = TSettings & {
  setSettings: (newSettings: TSettings) => void
}

export const SettingsPage: React.FC<TProps> = ({
  difficultyWords,
  mistakesLimit,
  setSettings,
}) => {
  const [newSettings, setNewSettings] = useState<TSettings>({
    difficultyWords,
    mistakesLimit,
  })

  const changeNewSettingsHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target
    setNewSettings({
      ...newSettings,
      [name]: name === 'mistakesLimit' ? Number(value) : value,
    })
  }

  return (
    <div className="menu">
      <form action="">
        <div>
          <span>Уровень сложности слов: </span>
          <select
            name="difficultyWords"
            id=""
            value={newSettings.difficultyWords}
            onChange={changeNewSettingsHandler}
          >
            <option value="easy">Лёгкий</option>
            <option value="medium">Средний</option>
            <option value="hard">Тяжёлый</option>
          </select>
        </div>
        <div>
          <span>Лимит ошибок: </span>
          <select
            name="mistakesLimit"
            id=""
            value={newSettings.mistakesLimit}
            onChange={changeNewSettingsHandler}
          >
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="14">14</option>
          </select>
        </div>
      </form>
      <button
        className="button__apply"
        onClick={() => setSettings(newSettings)}
      >
        Применить
      </button>
    </div>
  )
}
