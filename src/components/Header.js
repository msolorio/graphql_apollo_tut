import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/">
          new
        </Link>
        <div className="ml1">|</div>
        <Link to="/create">
          submit
        </Link>
      </div>
    </div>
  );
}

export default Header;
