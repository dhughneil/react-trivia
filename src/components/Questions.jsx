import React, { useState }  from 'react'
import "./Questions.css";
// import button from 'react-button/Button'

const questions = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: ["Canne", "Nice", "Paris", "Strasbourg"],
    answer: 'Paris',
  },
  {
    id: 2,
    text: "What is the capital of Nigeria?",
    options: ["Abuja", "Kano", "Zazzau", "Rano"],
    answer: "Abuja",
  },
  {
    id: 3,
    text: "What is the capital of Brazil?",
    options: ["Sao Paolo", "Brasilia", "Rio de Janerio", "Lisbon"],
    answer: "Brasilia",
  },
  {
    id: 4,
    text: "What is the capital of Russia?",
    options: [ "Saint Petersburg", "Moscow", "Lenningrad", "Kiev"],
    answer: "Moscow",
  },
  {
    id: 5,
    text: "What is the capital of Australia?",
    options: [ "Perth", "Sydney", "Vienna","Canberra"],
    answer: "Canberra",
  },
  {
    id: 6,
    text: "What is the capital of China?",
    options: [ "Shenzhen", "Shanghai", "Beijing","Hong Kong"],
    answer: "Beijing",
  },
  {
    id: 7,
    text: "What is the capital of Japan?",
    options: [ "Osaka", "Tokyo", "Nippon", "Kyoto"],
    answer: "Tokyo",
  },
  {
    id: 8,
    text: "What is the capital of Germany?",
    options: ["Berlin", "Frankfurt", "Hamburg", "Bern"],
    answer: "Berlin",
  },
  {
    id: 9,
    text: "What is the capital of Belgium?",
    options: [ "Antwerp", "Bruges", "Luxumbourg", "Brussels"],
    answer: "Brussels",
  },
  {
    id: 10,
    text: "What is the capital of Spain?",
    options: [ "Barcelona", "Seville", "Madrid", "Andorra"],
    answer: "Madrid",
  }  
];

function Questions({updateScore, endGame}) {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const currentQuestion = questions[currentQuestionIndex]
  const questionsLeft = questions.length - currentQuestionIndex -1

  const renderButton = (option, index) => {
    return (
      <button type="button" className="btn btn-dark btn-lg btn-block" key={index} onClick={() => handleAnswer(option)}>{option}</button>
    );
  };

  const handleSubmit = () => {
    updateScore(currentAnswer)
    setCurrentAnswer(false)
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    (questionsLeft === 0) ? endGame :
    console.log(showResults)
    console.log(questionsLeft)
  }

  const handleAnswer = (option) => {
    setSelectedAnswer(option)
    const isCorrect = option === currentQuestion.answer
    setCurrentAnswer(isCorrect)
    setSelectedAnswer(null)  // I added this line because of unexpected behavior, but I can't remember the problem.
    console.log(isCorrect)
  }

  return (
    <>

    <div>
    <p style={{ color: 'green' }}>Question {currentQuestionIndex + 1} of {questions.length}</p>
    <h3 style={{ color: 'darkblue'}}>{currentQuestion.text}</h3>
    
    {currentQuestion.options.map(renderButton)}
    
    <button type="button" className="btn btn-light" margintop='20px' onClick={handleSubmit}>Submit</button>
  </div>
    </>
  )
}

export default Questions

// original buttons

{/* <button type="button" className="btn btn-dark btn-lg btn-block" margin="10px" onClick={handleAnswer}>{currentQuestion.options[0]}</button>
<button type="button" className="btn btn-dark btn-lg btn-block" onClick={handleAnswer}>{currentQuestion.options[1]}</button>
<button type="button" className="btn btn-dark btn-lg btn-block" onClick={handleAnswer}>{currentQuestion.options[2]}</button>
<button type="button" className="btn btn-dark btn-lg btn-block" onClick={handleAnswer}>{currentQuestion.options[3]}</button> */}