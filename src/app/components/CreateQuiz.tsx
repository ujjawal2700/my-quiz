"use client";

import { redirect } from "next/navigation";
import React, { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function CreateQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    question: "",
    options: new Array(4).fill(""),
    correctAnswer: "",
  });

  const handleQuizSubmit = () => {
    // Handle quiz submission logic here
    console.log('Quiz Created:', questions);
    redirect('/custom/dashboard');
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentQuestion({ ...currentQuestion, [name]: value });
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  const handleSubmitQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
    });
  };



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Your Quiz</h1>
      {questions.length < 2 ? (
        <div className="mb-6">
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Question:
            </label>
            <input
              type="text"
              name="question"
              value={currentQuestion.question}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-800 rounded"
            />
          </div>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="mb-4">
              <label className="block text-lg font-semibold mb-2">
                Option {index + 1}:
              </label>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-full p-2 border border-gray-800 rounded"
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Correct Answer:
            </label>
            <input
              type="text"
              name="correctAnswer"
              value={currentQuestion.correctAnswer}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-800 rounded"
            />
          </div>
          <button
            onClick={handleSubmitQuestion}
            className="bg-blue-500 text-black p-2 rounded">
            Add Question
          </button>
        </div>
      ) : (
        <button
          onClick={handleQuizSubmit}
          className="bg-green-500 text-black p-2 rounded">
          Submit Quiz
        </button>
      )}
    </div>
  );
}