import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-primary text-3xl mb-4">Welcome to Our Survey!</h1>
      <button
        className="bg-secondary text-white py-2 px-4 rounded"
        onClick={() => navigate('/survey')}
      >
        Start Survey
      </button>
    </div>
  );
}

export default Welcome;
