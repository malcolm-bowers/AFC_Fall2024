import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const TodoItem = ({text}) => {
    return <li>{text}</li>
  }
  
  const handleChange = event => {
    setNewTodo(event.target.value);
    console.log(event);    
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setNewTodo('');
    console.log(todos);
  }

  const handleReset = event => {
    event.preventDefault();
    setNewTodo('');
    setTodos();
    console.log(todos)
  }

  return (
    <>
      <h1>Simple ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          className='todo-input'
          autoComplete='off'
          type='text'
          name='newTodo'
          placeholder='What needs to be done?'
          onChange={handleChange} 
        />

        <button
          type='submit'
          className='save-button'>
            SAVE
        </button>
        <button
          type='reset'
          className='reset-button'
          onReset={handleReset}>
            RESET
        </button>
      </form>
      <div>
        <ol>

        </ol>
      </div>
    </>
  )
}

export default App
