import React from 'react';

const Img = props => (
  <li>
    <img src={props.url} alt={props.title}/>
  </li>
);

export default Img;