import {TodoProvider} from './contexts'
import {useState} from 'react'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

    <h1>Test</h1>
      
    </TodoProvider>
  )
}

export default App
