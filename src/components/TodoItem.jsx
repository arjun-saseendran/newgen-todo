import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

const TodoItem = ({todo}) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMessage, setTodoMessage] = useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete} = useTodo();
    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMessage})
        setIsTodoEditable(false)
    }
    const toggleCompleted = () =>{
        toggleComplete(todo.id);

    }

  return (
    <div>TodoItem</div>
  )
}

export default TodoItem