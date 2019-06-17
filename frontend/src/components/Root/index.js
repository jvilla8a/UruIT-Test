import React from 'react';
import { NavLink } from 'react-router-dom';

import './root.css'

function Root () {
  return (
    <nav>
      <div className="container">
        <ul>
          <li><NavLink to={"/"}>Jugar</NavLink></li>
          <li><NavLink to={"/records"}>Records</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Root;