import { ADD_TODO, DELETE_TODO, SAVE_TODO, CHANGE_TODO, GET_TODO } from './types';

export const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return [...state, payload.todo];

    case GET_TODO:
      console.log('Getting todos...')
      const todos = localStorage.getItem('todos');
      if (todos) {
        state = JSON.parse(todos);
      }
      return state;

    case DELETE_TODO:
      return state.filter(t => t.id !== payload.id);

    case SAVE_TODO:
      localStorage.setItem('todos', JSON.stringify(state))
      return state;

    case CHANGE_TODO:
      return state.map(t => {
        if (t.id === payload.id)
          t.isComplete = !t.isComplete
        return t;
      })

    default:
      return state;
  }

}