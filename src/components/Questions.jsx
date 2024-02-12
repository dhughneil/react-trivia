import React from 'react'
import "./Questions.css";

function Questions({updateCorrect}) {
  const handleClick = () => {
    const newCorrect = 1
    updateCorrect(newCorrect) 
  }
  return (
    <div>Questions
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Questions