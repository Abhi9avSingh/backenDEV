import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log(response.data)
        setJokes(response.data)
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }, [])

  return (
    <div>
      <h1>Vite is running</h1>

      <h2>JOKES: {jokes.length}</h2>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App