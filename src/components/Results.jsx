import React from 'react'



function Results({correct, incorrect, accuracy}) {

    
  return (
      <>
      <div>
      <h2>Correct: {correct}&nbsp;&nbsp;&nbsp;&nbsp;Incorrect: {incorrect}&nbsp;&nbsp;&nbsp;&nbsp;   Accuracy: {accuracy}%</h2>
      
      </div>
    </>
  )
  }

export default Results