import React, { useState, useContext } from 'react';
import uuid from 'react-uuid';
import { TodoForm, InputTodo, ButtonCreate, WapperInput } from './styled/TodoInputStyled';
// import { AuthContext } from '../contexts/AuthContext';
import { ADD_TODO } from './reducer/types';
import { TodoContext } from '../contexts/TodoContext';

const TodoInput = (props) => {
  const [inputTodo, setInputTodo] = useState('');

  const { dispatch } = useContext(TodoContext);

  const onChangeInputTodo = (e) => {
    setInputTodo(e.target.value);
  }

  const onSubmitFormTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      title: inputTodo,
      isComplete: false,
    }

    dispatch({
      type: ADD_TODO,
      payload: {
        todo: newTodo
      }
    })
    setInputTodo('');
  }

  return (
    <TodoForm onSubmit={onSubmitFormTodo} autoComplete='off' >
      <WapperInput theme={props.theme} >
        <InputTodo

          theme={props.theme}
          className="todoInput"
          type="text"
          placeholder="Write a todos..."
          required
          name='inputTodo'
          value={inputTodo}
          onChange={onChangeInputTodo}
        />
        <ButtonCreate theme={props.theme}>Create</ButtonCreate>
      </WapperInput>
    </TodoForm>
  )
}

export default TodoInput
