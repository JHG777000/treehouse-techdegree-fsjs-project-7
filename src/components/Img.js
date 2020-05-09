import React from 'react';

const Img = props => (
  <li className="photo-container">
    <img src={props.url} alt=""/>
  </li>
);

export default Img;