import React from 'react'
import "./Questions.css";

const questions = [
  {
    text: "What is the capital of France?",
    options: ["Paris", "Nice", "Canne", "Strasbourg"],
    answer: 0,
  },
  {
    text: "What is the capital of Nigeria?",
    options: ["Abuja", "Kano", "Zazzau", "Rano"],
    answer: 0,
  },
  {
    text: "What is the capital of Brazil?",
    options: ["Brasilia", "Sao Paolo", "Rio de Janerio", "Lisbon"],
    answer: 0,
  },
  {
    text: "What is the capital of Russia?",
    options: ["Moscow", "Saint Petersburg", "Lenningrad", "Kiev"],
    answer: 0,
  },
  {
    text: "What is the capital of Australia?",
    options: ["Canberra", "Perth", "Sydney", "Vienna"],
    answer: 0,
  },
  {
    text: "What is the capital of China?",
    options: ["Beijing", "Shenzhen", "Shanghai", "Hong Kong"],
    answer: 0,
  },
  {
    text: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Nippon", "Kyoto"],
    answer: 0,
  },
  {
    text: "What is the capital of Germany?",
    options: ["Berlin", "Frankfurt", "Hamburg", "Bern"],
    answer: 0,
  },
  {
    text: "What is the capital of Belgium?",
    options: ["Brussels", "Antwerp", "Bruges", "Luxumbourg"],
    answer: 0,
  },
  {
    text: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Seville", "Andorra"],
    answer: 0,
  }  
];

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