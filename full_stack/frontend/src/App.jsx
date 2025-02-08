import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
      //we directly setting response to our state coming from axios no need to parse and all as axios taking care internally
    })
    .catch((error) => {
      console.log(`error coming from jokes api ${error}`);
      
    })
  })

  return (
    <>
      <div>
        <h1>This is Full Stack Jokes App</h1>
        <h2>Number of Jokes: ${jokes.length}</h2>
        {
          jokes && jokes?.map((joke) => {
            return (
              <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
