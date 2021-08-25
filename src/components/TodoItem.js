
import React, { useContext } from 'react'
import check from '../asset/check.svg';
import { Task, Left, Right, IconCheck, TitleTodo, WapperIcon, IconDelete } from './styled/TodoItemStyled';
import { TodoContext } from '../contexts/TodoContext';
import { DELETE_TODO, CHANGE_TODO } from './reducer/types'

const TodoItem = ({ todo, theme }) => {
  const { dispatch } = useContext(TodoContext)

  const handlerCompleteTodo = () => {
    dispatch({
      type: CHANGE_TODO,
      payload: { id: todo.id }
    })
  }

  const handlerDelete = () => {
    dispatch({
      type: DELETE_TODO,
      payload: { id: todo.id }
    })
  }

  return (
    <Task
      theme={theme}
      isComplete={todo.isComplete}
    >
      <Left >
        <IconCheck
          onClick={handlerCompleteTodo}
          theme={theme}
        >
          {todo.isComplete && <img src={check} alt="" />}
        </IconCheck>
        <TitleTodo
          theme={theme}
          isComplete={todo.isComplete}
        >
          {todo.title}
        </TitleTodo>
      </Left>
      <Right >
        <WapperIcon
          onClick={handlerDelete}
          theme={theme}
        >
          <IconDelete
            theme={theme}
            className="fi-rr-cross-circle"
          ></IconDelete>
        </WapperIcon>
      </Right>
    </Task>
  )
}

export default TodoItem

