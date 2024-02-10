import './App.css'
import Results from './components/Results'
import Questions from './components/Questions'

function App() {


  return (

    <>
      <div>
        <h1>What Do You Know?</h1>
        <p>
        A single player trivia game. Drill yourself. Improve your game.
      </p>
        <Results />
        <Questions />
      </div>
    </>
  )
}

export default App
