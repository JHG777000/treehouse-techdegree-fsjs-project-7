import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="main-nav">
    <ul>
      <li><NavLink to="/dogs">Dogs</NavLink></li>
      <li><NavLink to="/birds">Birds</NavLink></li>
      <li><NavLink to="/cats">Cats</NavLink></li>
    </ul>    
  </div>
);

export default Nav;