import React, { useContext } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import { Wapper, SectionContainer, TodoList } from './styled/TodosStyled';
import { TodoContext } from '../contexts/TodoContext';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Toggle from './Toggle';
import { } from './reducer/types'

const Todos = () => {
  // userContext todo
  const {
    todos,
  } = useContext(TodoContext);

  // useContext
  const { theme } = useContext(ThemeContext);
  const { isDarkTheme, themeDark, themeLight } = theme;
  const isTheme = isDarkTheme ? themeDark : themeLight;
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  // body todo
  let body = <>

    {isAuthenticated ?
      (todos ? todos.map(todo =>
        <TodoItem
          theme={isTheme}
          key={todo.id}
          todo={todo}
        />
      ) : '')
      : ''}
  </>

  return (
    <Wapper theme={isTheme} >
      <SectionContainer theme={isTheme}>
        <Toggle />
        <TodoInput theme={isTheme} />
        <TodoList >
          {body}
        </TodoList>
      </SectionContainer>
    </Wapper>

  )
}
export default Todos;
