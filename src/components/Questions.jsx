import React, { useState }  from 'react'
import "./Questions.css";


const questions = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: ["Canne", "Nice", "Paris", "Strasbourg"],
    answer: 'Paris',
    yourAnswer: '',
  },
  {
    id: 2,
    text: "What is the capital of Nigeria?",
    options: ["Abuja", "Kano", "Zazzau", "Rano"],
    answer: "Abuja",
    yourAnswer: '',
  },
  {
    id: 3,
    text: "What is the capital of Brazil?",
    options: ["Sao Paolo", "Brasilia", "Rio de Janerio", "Lisbon"],
    answer: "Brasilia",
    yourAnswer: '',
  },
  {
    id: 4,
    text: "What is the capital of Russia?",
    options: [ "Saint Petersburg", "Moscow", "Lenningrad", "Kiev"],
    answer: "Moscow",
    yourAnswer: '',
  },
  {
    id: 5,
    text: "What is the capital of Australia?",
    options: [ "Perth", "Sydney", "Vienna","Canberra"],
    answer: "Canberra",
    yourAnswer: '',
  },
  {
    id: 6,
    text: "What is the capital of China?",
    options: [ "Shenzhen", "Shanghai", "Beijing","Hong Kong"],
    answer: "Beijing",
    yourAnswer: '',
  },
  {
    id: 7,
    text: "What is the capital of Japan?",
    options: [ "Osaka", "Tokyo", "Nippon", "Kyoto"],
    answer: "Tokyo",
    yourAnswer: '',
  },
  {
    id: 8,
    text: "What is the capital of Germany?",
    options: ["Berlin", "Frankfurt", "Hamburg", "Bonn"],
    answer: "Berlin",
    yourAnswer: '',
  },
  {
    id: 9,
    text: "What is the capital of Belgium?",
    options: [ "Antwerp", "Bruges", "Luxumbourg", "Brussels"],
    answer: "Brussels",
    yourAnswer: '',
  },
  {
    id: 10,
    text: "What is the capital of Spain?",
    options: [ "Barcelona", "Seville", "Madrid", "Andorra"],
    answer: "Madrid",
    yourAnswer: '',
  },  
  {
    id: 11,
    text: "What is the capital of The United States of America",
    options: [ "Washington D.C.", "New York", "Chicago", "Boston"],
    answer: "Washington D.C.",
    yourAnswer: '',
  },
  {
    id: 12,
    text: "What is the capital of Canada?",
    options: [ "Toronto", "Montreal", "Ottawa", "Vancouver"],
    answer: "Ottawa",
    yourAnswer: '',
  }, 
  {
    id: 13,
    text: "What is the capital of Belize?",
    options: [ "Belmopan", "Belize City", "Lamnanai", "Piedras Negras"],
    answer: "Belmopan",
    yourAnswer: '',
  }, 
  {
    id: 14,
    text: "What is the capital of Egypt?",
    options: [ "Alexandria", "Jerusalem", "Khartoum", "Cairo"],
    answer: "Cairo",
    yourAnswer: '',
  }, 
  {
    id: 15,
    text: "What is the capital of Republic of Ireland?",
    options: [ "Belfast", "Dublin", "Cork", "Derry"],
    answer: "Dublin",
    yourAnswer: '',
  }, 
  {
    id: 16,
    text: "What is the capital of Northern Ireland?",
    options: [ "Belfast", "Dublin", "Cork", "Derry"],
    answer: "Belfast",
    yourAnswer: '',
  }, 
  {
    id: 17,
    text: "What is the capital of Singapore?",
    options: [ "Taiwan", "Singapore", "Beijing", "Kuala Lumpur"],
    answer: "Singapore",
    yourAnswer: '',
  }, 
  {
    id: 18,
    text: "What is the capital of India?",
    options: [ "Mumbai", "Bombay", "Punjab", "New Delhi"],
    answer: "New Delhi",
    yourAnswer: '',
  }, 
  {
    id: 19,
    text: "What is the capital of Sweden?",
    options: [ "Stockholm", "Oslo", "Gothenburg", "Fyllinge"],
    answer: "Stockholm",
    yourAnswer: '',
  }, 
  {
    id: 20,
    text: "What is the capital of Columbia?",
    options: [ "Cartagena", "Caracas", "Bogota", "Medellin"],
    answer: "Bogota",
    yourAnswer: '',
  }
];

function Questions({updateScore, endGame}) {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // used to move through the questions.
  const [selectedAnswer, setSelectedAnswer] = useState(null); // used for conditionally disabling the Submit button.
  const [currentAnswer, setCurrentAnswer] = useState(false)  // used for scoring - true is set for a correct answer, false is for an incorrect answer.
  const currentQuestion = questions[currentQuestionIndex]  // used for displaying the question and the options, and determining correct or incorrect answers.
  const questionsLeft = questions.length - currentQuestionIndex -1  // This is used as part of determining if the game is over to show results.
  const [answerSubmitted, setAnswerSubmitted] = useState(false)  // this is used to conditionally show the answer once the user hits submit.
  const [disableButton, setDisableButton] = useState(true)  // This is part of the disabling the Submit button.
  const [disableOptions, setDisableOptions] = useState(false) // This causes the answer options to become disabled while viewing the correct answer.

  
  let timeoutId;

  // The four line below were used for an attempt to score in a better way, the implementation didn't work as expected, but now if these lines are removed, other functionality breaks. Refactoring could make the code smaller, but I need to move to the next ticket.
  const [correct, setCorrect] = useState(0)
  const [incorrect, setincorrect] = useState(0)
  const calc =  correct + incorrect === 0 ? 1 : correct /(correct + incorrect)
  const accuracy = calc !== 0 ? (calc * 100).toFixed(1) : 0
  
  // This renders the buttons with the options as their lables
  const renderButton = (option, index) => {
    return (
      <button type="button" className="btn btn-lg btn-block" disabled={disableOptions} key={index} onClick={() => handleAnswer(option)}>{option}</button>
      );
    };
    
    // Handles the back button
    const handleBack = () => {
      clearTimeout(timeoutId);
      setDisableOptions(false)
      setAnswerSubmitted(false)
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    
    // handles the next button
    const handleNext = () => {
      clearTimeout(timeoutId);
      setDisableOptions(false)
      setAnswerSubmitted(false)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    (questionsLeft === 0) ? endGame(true) :console.log("")
  }

  // handles the submit button
  const handleSubmit = () => {
    updateScore(currentAnswer)
    checkAnswers()
    setAnswerSubmitted(true)
    setDisableButton(true)    
    timeoutId = setTimeout(() => { // The timeout allows the correct answer to be displayed before moving on.
      handleNext()
      }, 1200);
    
  };
  // This handles when someone answers the question. It sets up the scoring. The user can change answers before submitting the answer. The Submit button actually records the score.
  const handleAnswer = (option) => {
    setSelectedAnswer(option)
    const isCorrect = option === currentQuestion.answer
    setCurrentAnswer(isCorrect)
    setSelectedAnswer(null)  // I added this line because of undesirable behavior, but I can't remember the problem.
    setDisableButton(false);  // allows the Submit button to become enabled.
    questions[currentQuestionIndex].yourAnswer = option  // This modify's the questions object to add the selected answer to the yourAnswer property.
    // console.log(option)
    // console.log(questions.yourAnswer)
    // console.log("answer put into the array", userAnswers)
  };
  
  // This code will determine evaluate the whole array of questions comparing the questions.answer property with the questions.yourAnswer property
  const checkAnswers = () => {
    questions.forEach((question, index) => {
      if (question.answer === question.yourAnswer) {
        setCorrect(correct +1)
        setDisableOptions(true)
        // console.log(`Question ${question.id}: Correct!`);
      } else {
        setincorrect(incorrect + 1)
        setDisableOptions(true)  
        // console.log(`Question ${question.id}: Incorrect!`);
      }
    });
  };
  
  
  return (
    <>

    <div> 
    <p style={{ color: 'green' }}>Question {currentQuestionIndex + 1} of {questions.length}</p>
    <h3 style={{ color: 'darkblue'}}>{currentQuestion.text}</h3>
    <br></br>

<h3>
  Answer:
  <span style={{ visibility: answerSubmitted ? 'visible' : 'hidden' }}>
    {currentAnswer ? (
      <span style={{ color: 'green' }}> {currentQuestion.answer}</span>
      ) : (
        <span style={{ color: 'red' }}> {currentQuestion.answer}</span>
        )}
  </span>
</h3>

    <div><br></br></div>
    
      {currentQuestion.options.map(renderButton)} 
          
  </div>
  <br></br>
   <div>
    <button type="button" className="btn btn-light" style={{ marginRight: '10px' }} disabled={currentQuestionIndex === 0 } onClick={handleBack}>Back</button>
    <button type="button" className="btn btn-light" style={{ marginRight: '10px' }} disabled={disableButton} onClick={handleSubmit}>Submit</button>
    <button type="button" className="btn btn-light" style={{ marginRight: '10px' }} disabled={currentQuestionIndex === questions.length - 1 }onClick={handleNext}>Next</button>
   </div>
    </>
  )
}
export default Questions

// old code that I might work on later to improve the handling of questions and scoring.

// const [userAnswers, setUserAnswers] = useState(questions);

// updateUserAnswer(currentQuestionIndex, option)  // was in const handleAnswer

// const updateUserAnswer = (currentQuestionIndex, option) => {
  //   setUserAnswers(prevQuestions => {
    //     return prevQuestions.map(question => {
      //       if (question.id === currentQuestionIndex + 1) {
        //         return { ...question, yourAnswer: option };
        //       }
        //       return question;
        //     });
        //   });
        // };

// the button below was created to conditionally disable the submit button. It didn't seem to work.
{/* {(!disableButton && questions[currentQuestionIndex].yourAnswer === null) ? <button type="button" className="btn btn-light" style={{ marginRight: '10px' }} onClick={handleSubmit}>Submit</button> : <button type="button" className="btn btn-light" style={{ marginRight: '10px' }} disabled={disableButton} onClick={handleSubmit}>Submit</button>} */}