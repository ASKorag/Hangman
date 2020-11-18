import React from 'react'
import { Link } from 'react-router-dom'

type TMainPage = {
  isPlaying: boolean
}

export const MainPage: React.FC<TMainPage> = props => {
  return (
    <>
      <Link to='/play'>
        <button>{props.isPlaying ? 'Продолжить игру' : 'Новая игра'}</button>
      </Link>
      <Link to='/settings'>
        <button>Настройки</button>
      </Link>
      <Link to='/about'>
        <button>Об игре</button>
      </Link>
    </>
  )
}
