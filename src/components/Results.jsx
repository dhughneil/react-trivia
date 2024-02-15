import React from 'react'

// This component isn't needed at all because it only displays one line of text. So rather that use one line of text to call this component to display one line of text, I'm eliminating this from use.

// If this function calculated something to product that one line of text it would be warrented, but it doesn't.

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