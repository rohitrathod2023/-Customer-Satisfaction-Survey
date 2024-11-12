import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="text-center">
      <h1 className="text-primary text-2xl mb-4">Thank You for Your Feedback!</h1>
      <p className="text-dark">Returning to the welcome screen shortly...</p>
    </div>
  );  
}

export default ThankYou;
