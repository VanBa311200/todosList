import React, { createContext, useState, useEffect } from 'react';

// createcontext
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isDarkTheme: true,
    themeDark: {
      primary_bg: '#303239',
      secondary_bg: '#232127',
      textcolor: '#fff',
      checked_task_bg: '#25262b',
      sub_text_color: '#90a2aa',
      sub_icon_color: '#90a2aa',
      sub_icon_color_hover: 'white',
      hover_color: '#26272d',
      modal_bg: '#19181c',
      modal_input_bg: '#303239',
      modal_btn_hover: '#2f2d34',
      modal_input_border: '#363b40',
      modal_input_text_color: '#90a2aa',
      form_border: '2px solid #363b40',
      todo_hover: '5px 5px 20px #1c1d22',
    },
    themeLight: {
      primary_bg: '#fff',
      secondary_bg: '#f2f2f2',
      text_color: ' #000',
      checked_task_bg: '#e9e9e9',
      sub_text_color: ' #9ca7b8',
      sub_icon_color: '#9ca7b8',
      sub_icon_color_hover: 'black',
      hover_color: '#e5e5e5',
      modal_bg: '#fff',
      modal_btn_hover: '#eff6fc',
      form_border: '2px solid #c9c9c9',
      todo_hover: '5px 5px 20px rgba(28,29,34,0.1)',
    }
  });

  useEffect(() => {
    const th = localStorage.getItem('theme')
    if (th)
      setTheme(JSON.parse(th))
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const themeContextData = {
    theme, setTheme
  }

  return (
    <ThemeContext.Provider value={themeContextData} >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
