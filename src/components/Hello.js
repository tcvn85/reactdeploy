import React from 'react';
import { Link } from 'react-router-dom';

function Hello() {
  return (
    

    <div className="home">
      <p>Hello</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default Hello;
