const questions = [
    { 
      id: 'q1', 
      question: 'How satisfied are you with our products? (Please rate from 1 to 5)', 
      type: 'number', 
      min: 1, 
      max: 5 
    },
    { 
      id: 'q2', 
      question: 'How fair are the prices compared to similar retailers? (Please rate from 1 to 5)', 
      type: 'number', 
      min: 1, 
      max: 5 
    },
    { 
      id: 'q3', 
      question: 'How satisfied are you with the value for money of your purchase? (Please rate from 1 to 5)', 
      type: 'number', 
      min: 1, 
      max: 5 
    },
    { 
      id: 'q4', 
      question: 'On a scale of 1-10, how would you recommend us to your friends and family?', 
      type: 'number', 
      min: 1, 
      max: 10 
    },
    { id: 'q5', 
      question: 'What could we do to improve our service?', 
      type: 'text' 
    },
  ];
  
  export default questions;
  