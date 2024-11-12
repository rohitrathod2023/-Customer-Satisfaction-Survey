import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from './Questions';

function Survey() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  const handleResponseChange = (questionId, answer) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to submit the survey?')) {
      const sessionId = `session-${Date.now()}`;
      localStorage.setItem(sessionId, JSON.stringify({ ...responses, status: 'COMPLETED' }));
      navigate('/thankyou');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="text-center">
      <h2 className="text-primary text-2xl mb-4 font-semibold">
        Question {currentQuestionIndex + 1} / {questions.length}
      </h2>
      <p className="text-dark mb-4">{currentQuestion.question}</p>
      {currentQuestion.type === 'text' ? (
        <textarea
          className="border p-2 mb-4 w-full h-32 resize-none"
          placeholder="Your feedback here"
          value={responses[currentQuestion.id] || ''}
          onChange={(e) => handleResponseChange(currentQuestion.id, e.target.value)}
        />
      ) : (
        <input
          type="number"
          min={currentQuestion.min}
          max={currentQuestion.max}
          className="border p-2 mb-4 w-1/3 text-center text-dark"
          value={responses[currentQuestion.id] || ''}
          onChange={(e) => handleResponseChange(currentQuestion.id, e.target.value)}
        />
      )}
      <div className="mt-4 flex justify-around">
        <button
          className="bg-secondary text-white py-1 px-3 mr-2 rounded"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-secondary text-white py-1 px-3 mr-2 rounded"
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
        {currentQuestionIndex === questions.length - 1 && (
          <button
            className="bg-accent text-white py-1 px-3 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Survey;
