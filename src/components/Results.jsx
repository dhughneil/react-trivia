import React, { useState } from 'react'



function Results() {
  const [correct, setCorect] = useState(15)
  const [incorrect, setIncorrect] = useState(6)
  let calc = correct /(correct + incorrect)
  let accuracy = (calc * 100).toFixed(1);


    
  return (
      <>
      <div>
      <h2>Correct: {correct}</h2>
      <h2>Wrong: {incorrect}</h2>
      <h2>Accuracy: {accuracy}%</h2>
      </div>
    
    </>
  )
  }

export default Results