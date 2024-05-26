
import { ADD_TODO, DELETE_TODO } from "../action/action.js"

const initialState = {
  todos: [
    'Revise Advanced JavaScript',
    'Go for 30 mins walk',
    'Revise CSS Pseudo Class Selectors'
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      const newTodos = state.todos.filter((todo, index) => index !== action.payload)
      return {
        ...state,
        todos: newTodos
      }
    default:
      return state
  }
}

export default reducer
