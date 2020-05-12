import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="main-nav">
    <ul>
      <li><NavLink to="/sunsets">Sunsets</NavLink></li>
      <li><NavLink to="/fall">Fall</NavLink></li>
      <li><NavLink to="/desert">Desert</NavLink></li>
    </ul>    
  </div>
);

export default Nav;