import React, { useState } from 'react'
import './App.css'
import Results from './components/Results'
import Questions from './components/Questions'

function App() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0)
  const calc =  correct + incorrect === 0 ? 1 : correct /(correct + incorrect)
  const accuracy = calc !== 0 ? (calc * 100).toFixed(1) : 0


  const updateCorrect = (currentAnswer) => {
    (currentAnswer === true) ? setCorrect(correct+1): setIncorrect(incorrect+1);
  }

   return (

    <>
      <div>
        <h1>What Do You Know?</h1>
        <p>
        A single player trivia game. Drill yourself. Improve your game.
      </p>
      <h4>Correct: {correct}&nbsp;&nbsp;&nbsp;&nbsp;
      Incorrect: {incorrect}&nbsp;&nbsp;&nbsp;&nbsp;   
      Accuracy: {accuracy}%</h4>
        <Questions updateCorrect={updateCorrect}/>
      </div>
    </>
  )
}

export default App
