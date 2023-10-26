import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ tabs }) => {
  return (
    <div className='app-header'>
      <ul className="app-nav">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link className="app-link" to={tab.id}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
