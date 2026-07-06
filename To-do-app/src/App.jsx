import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    if(input.trim()!='')
      {
        setTasks([...tasks,input])
        console.log("Task added")
        setInput(''); 
        return <button onClick={addTask}>Add</button>
    
      }
    else{
      return <p>Please enter a task</p>
    }
    
  }

  function deleteTask(index) {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    

  }

  return (
    <div>
      <h1>Todo List</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task"/>
      <button onClick={addTask}>Add</button>

      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
      <p>Total tasks: {tasks.length}</p>
    </div>
  )
}
