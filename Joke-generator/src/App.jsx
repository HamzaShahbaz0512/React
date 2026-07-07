import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

export default function App() {
  const [joke,setJoke]=useState('')
  useEffect(()=>{
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res=>res.json())
    .then(data=>setJoke(data.setup+' ... '+data.punchline))
  },[])
  return (
    <div>
      <h3>This is a random joke:</h3>
      <p>{joke}</p>
    </div>
  )
}





/*

export default function App() {
  const [joke, setJoke] = useState('')

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => setJoke(data.setup + ' ... ' + data.punchline))
  }, [])

  return (
    <div>
      <h2>Random Joke:</h2>
      <p>{joke}</p>
    </div>
  )
}*/