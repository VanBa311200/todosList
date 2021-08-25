import React, { useContext } from 'react'
import { Switch, CheckPoint, Slider } from './styled/ToggleStyled'
import { ThemeContext } from '../contexts/ThemeContext';

const Toggle = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, setTheme } = themeContext;
  const { isDarkTheme } = theme;

  const changeTheme = () => {
    setTheme({ ...theme, isDarkTheme: !isDarkTheme });
  }

  return (
    <Switch onClick={changeTheme}>
      <CheckPoint type="checkbox" checked={isDarkTheme} readOnly />
      <Slider></Slider>
    </Switch>
  )
}

export default Toggle
