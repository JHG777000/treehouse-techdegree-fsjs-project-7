import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const Gallery = (props) => {
  const getURL = (photo) =>
    `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;

  const results = props.data;
  let photos = undefined;
  if (results !== undefined && results.length > 0) {
    photos = results.map((photo) => (
      <Photo url={getURL(photo)} title={photo.title} key={photo.id} />
    ));
  } else {
    photos = <NoPhotos />;
  }

  return (
    <div className="photo-container">
      <ul>{photos}</ul>
    </div>
  );
};

export default Gallery;
