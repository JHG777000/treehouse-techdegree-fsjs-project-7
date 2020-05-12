import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

const ImgList = (props) => {
  const getURL = (img) =>
    `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`;

  const results = props.data;
  let imgs;
  if (results !== undefined && results.length > 0) {
    imgs = results.map((img) => (
      <Img url={getURL(img)} title={img.title} key={img.id} />
    ));
  } else {
    imgs = <NoImgs />;
  }

  return (
    <div className="photo-container">
      <ul>{imgs}</ul>
    </div>
  );
};

export default ImgList;
