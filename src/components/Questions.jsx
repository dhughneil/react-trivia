import React, { useState }  from 'react'
import "./Questions.css";


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
  },  
  {
    id: 11,
    text: "What is the capital of The United States of America",
    options: [ "Washington D.C.", "New York", "Chicago", "Boston"],
    answer: "Washington D.C.",
  },
  {
    id: 12,
    text: "What is the capital of Canada?",
    options: [ "Toronto", "Montreal", "Ottawa", "Vancouver"],
    answer: "Ottawa",
  }, 
  {
    id: 13,
    text: "What is the capital of Belize?",
    options: [ "Belmopan", "Belize City", "Lamnanai", "Piedras Negras"],
    answer: "Belmopan",
  }, 
  {
    id: 14,
    text: "What is the capital of Egypt?",
    options: [ "Alexandria", "Jerusalem", "Khartoum", "Cairo"],
    answer: "Cairo",
  }, 
  {
    id: 15,
    text: "What is the capital of Republic of Ireland?",
    options: [ "Belfast", "Dublin", "Cork", "Derry"],
    answer: "Dublin",
  }, 
  {
    id: 16,
    text: "What is the capital of Northern Ireland?",
    options: [ "Belfast", "Dublin", "Cork", "Derry"],
    answer: "Belfast",
  }, 
  {
    id: 17,
    text: "What is the capital of Singapore?",
    options: [ "Taiwan", "Singapore", "Beijing", "Kuala Lumpur"],
    answer: "Singapore",
  }, 
  {
    id: 18,
    text: "What is the capital of India?",
    options: [ "Mumbai", "Bombay", "Punjab", "New Delhi"],
    answer: "New Delhi",
  }, 
  {
    id: 19,
    text: "What is the capital of Sweden?",
    options: [ "Stockholm", "Oslo", "Gothenburg", "Fyllinge"],
    answer: "Stockholm",
  }, 
  {
    id: 20,
    text: "What is the capital of Columbia?",
    options: [ "Cartagena", "Caracas", "Bogota", "Medellin"],
    answer: "Bogota",
  }
];

function Questions({updateScore, endGame}) {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(false)
  const [optionSelected, setOptionsSelected] = useState()
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
    (questionsLeft === 0) ? endGame(true) :
    setOptionsSelected(false)
  }

  const handleAnswer = (option) => {
    setSelectedAnswer(option)
    const isCorrect = option === currentQuestion.answer
    setCurrentAnswer(isCorrect)
    setSelectedAnswer(null)  // I added this line because of undesirable behavior, but I can't remember the problem.
    setOptionsSelected(true)
  
  }

  return (
    <>

    <div>
    <p style={{ color: 'green' }}>Question {currentQuestionIndex + 1} of {questions.length}</p>
    <h3 style={{ color: 'darkblue'}}>{currentQuestion.text}</h3>
    <div><br></br></div>
    
      {currentQuestion.options.map(renderButton)} 
    
  </div>
  <br></br>
   <div>
    <button type="button" className="btn btn-light" disabled={!optionSelected} onClick={handleSubmit}>Submit</button>
   </div>
    </>
  )
}

export default Questions