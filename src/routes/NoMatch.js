import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotMatch = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <h1>Oops!! Page Does not exist</h1>
      <p>The page you are looking for does not exist</p>
      <div>
        <button type="button" onClick={() => navigate(-1)} className="back-btn">
          Go back
        </button>
      </div>
    </div>
  );
};
export default NotMatch;
