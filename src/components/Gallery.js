import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

//Gallery renders the photos

const Gallery = (props) => {
  //get URL for photo from data passed down from Main
  const getURL = (photo) =>
    `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;

  //make the photo array from the photo data passed down from Main
  const results = props.data;
  let photos = undefined;
  if (results !== undefined && results.length > 0) {
    photos = results.map((photo) => (
      <Photo url={getURL(photo)} title={photo.title} key={photo.id} />
    ));
  } else {
    photos = <NoPhotos />;
  }

  //render the Gallery
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="photo-container">
        <ul>{photos}</ul>
      </div>
    </div>
  );
};

export default Gallery;
