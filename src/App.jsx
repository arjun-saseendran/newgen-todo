import {TodoProvider} from './contexts'
import {useState} from 'react'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

    <h1>Test</h1>
      
    </TodoProvider>
  )
}

export default App
