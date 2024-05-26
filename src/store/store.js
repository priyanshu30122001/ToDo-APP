import { createStore } from 'redux'
import { composeWithDevTools  } from '@redux-devtools/extension'
import todosReducer from '../reducer/reducer.js' 

const store = createStore(todosReducer, composeWithDevTools())

export default store