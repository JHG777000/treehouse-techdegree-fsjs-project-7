import React from 'react';

//NoPhotos displays an error when no photos could be found in a search

const NoPhotos = (props) => (
  <li class="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
  </li>
);

export default NoPhotos;
