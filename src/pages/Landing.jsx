import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="bottom-align">
        <h1>Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
