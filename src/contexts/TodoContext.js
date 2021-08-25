import React, { createContext, useEffect, useReducer } from 'react'
import { todoReducer } from '../components/reducer/TodoReducer';
import { GET_TODO, SAVE_TODO } from '../components/reducer/types'

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [])

  useEffect(() => {
    dispatch({
      type: GET_TODO,
      payload: null
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: SAVE_TODO,
      payload: null
    })
  }, [todos])

  const todoContextData = {
    todos,
    dispatch
  }

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
