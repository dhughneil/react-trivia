import React from 'react'


function Results({accuracy, restart}) {
  const handleClick = () => {
    restart(false)
    window.location.reload();

  }

  return (
      <>
      <div>
      {/* <h2>Correct: {correct}&nbsp;&nbsp;&nbsp;&nbsp;Incorrect: {incorrect}&nbsp;&nbsp;&nbsp;&nbsp;   Accuracy: {accuracy}%</h2> */}
      <h2 style={{ color: 'darkblue'}}>Final Score!</h2>
      {(accuracy >= 70.0) ? <h1 style={{ color: 'green'}}>{accuracy} %</h1> : <h1 style={{ color: 'red'}}>{accuracy} %</h1>}
      </div>
      <br></br>
      <div>
      <button type="button" className="btn btn-light" onClick={handleClick}>Try Again</button>
      </div>
    </>
  )
  }

export default Results