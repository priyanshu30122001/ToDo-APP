
import React, { useState } from 'react'
import './index.css'
import { addTodo } from '../../action/action.js'
import { useDispatch } from 'react-redux'

function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  const handleTodoAddition = () => {


    if(newTodo === ''){
      alert('Please enter a Todo first ')
    }
    else{  dispatch(addTodo(newTodo))
    setNewTodo('')
      }
  }

  return (
    <div> 
      <input 
        id='new-todo-input' 
        type="text" 
        placeholder='New todo ...' 
        value={newTodo}
        onInput={(e) => setNewTodo(e.target.value)}
      />
      <button 
        id='add-btn' 
        onClick={handleTodoAddition}
      >
        +
      </button>
    </div>
  )
}

export default AddTodo
