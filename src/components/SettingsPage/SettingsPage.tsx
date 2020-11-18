import React, { ChangeEvent, useState } from 'react'

type T = {
  difficultyWords: string
  mistakesLimit: number
}

type TProps = T & {
  onSetSettings: (newSettings: T) => void
}

export const SettingsPage: React.FC<TProps> = ({
  difficultyWords,
  mistakesLimit,
  onSetSettings,
}) => {
  const [newSettings, setNewSettings] = useState<T>({
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
    <>
      <form action=''>
        <div>
          <span>Уровень сложности слов: </span>
          <select
            name='difficultyWords'
            id=''
            value={newSettings.difficultyWords}
            onChange={changeNewSettingsHandler}
          >
            <option value='easy'>Лёгкий</option>
            <option value='medium'>Средний</option>
            <option value='hard'>Тяжёлый</option>
          </select>
        </div>
        <div>
          <span>Лимит ошибок: </span>
          <select
            name='mistakesLimit'
            id=''
            value={newSettings.mistakesLimit}
            onChange={changeNewSettingsHandler}
          >
            <option value='4'>4</option>
            <option value='6'>6</option>
            <option value='8'>8</option>
            <option value='10'>10</option>
            <option value='14'>14</option>
          </select>
        </div>
      </form>
      <button onClick={() => onSetSettings(newSettings)}>Применить</button>
    </>
  )
}
