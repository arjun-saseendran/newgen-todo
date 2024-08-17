import React, { useState } from 'react'
import {useTodo} from '../contexts/TodoContext'

const TodoForm = () => {
    const [todo, setTodo] = useState('');
    useTodo()
  return (
    <div>TodoForm</div>
  )
}

export default TodoForm