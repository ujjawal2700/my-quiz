'use client';

import { useState, useEffect } from 'react';
import getQuestions from '../api/fetchData';

const TakeQuiz = () => {

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "2",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correctAnswer: "Diamond",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
    },
  ];

  
  // const questions1 = getQuestions()
  // console.log(questions1)

  

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [check, setCheck] = useState(false)
  const [score, setScore] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOptionChange = (questionIndex: number, option: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = option;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setCheck(true)
    console.log("clicked")
  };

  const changeQuestion = () => {
    console.log("clicked change question")
  }


  return (
    <div className="container mx-auto p-4 overflow-scroll">
      <h1 className="text-2xl font-bold mb-4">General Knowledge Quiz</h1>
      <div className="mb-4">
        <span className="font-semibold">Time Left: </span>
        <span>{`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}</span>
      </div>
      {questions.map((q, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{q.question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {q.options.map((option, optionIndex) => (
              <label key={optionIndex} className="flex items-center">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  disabled={check}
                  required={true}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <div className='relative flex gap-5'>
      <button
        onClick={changeQuestion}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Next Quiz
      </button>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Submit
      </button>
      </div>
      {score !== null && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Your Score: {score} / {questions.length}</h2>
        </div>
      )}
    </div>
  );
};

export default TakeQuiz;