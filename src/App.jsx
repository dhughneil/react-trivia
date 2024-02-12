import React, { useState } from 'react'
import './App.css'
import Results from './components/Results'
import Questions from './components/Questions'

function App() {
  const [correct, setCorrect] = useState(5);
  const [incorrect, setIncorrect] = useState(3)
  const calc =  correct /(correct + incorrect)
  let accuracy = (calc * 100).toFixed(1);

  const updateCorrect = (newCorrect) => {
    setIncorrect(incorrect+newCorrect)
  }

  return (

    <>
      <div>
        <h1>What Do You Know?</h1>
        <p>
        A single player trivia game. Drill yourself. Improve your game.
      </p>
        <Results correct={correct} incorrect={incorrect} accuracy={accuracy}/>
        <Questions updateCorrect={updateCorrect}/>
      </div>
    </>
  )
}

export default App
