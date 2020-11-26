import React from 'react'
import { Link } from 'react-router-dom'
//import 'materialize-css'
//import { Button } from 'react-materialize'
//import s from './MainPage.module.css'

type T = {
  isPlaying: boolean
  startGame: () => void
}

export const MainPage: React.FC<T> = (props) => {
  return (
    <div className="menu">
      <Link
        className="menu__button button__game"
        to="/play"
        onClick={() => props.startGame()}
      >
        {props.isPlaying ? 'Продолжить игру' : 'Новая игра'}
      </Link>
      <Link className="menu__button button__settings" to="/settings">
        Настройки
      </Link>
      <Link className="menu__button button__about" to="/about">
        Об игре
      </Link>
    </div>
  )
}
