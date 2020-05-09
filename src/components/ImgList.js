import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs'

const ImgList = props => { 
  
  const results = props.data;
  let imgs;
  if (results !== undefined && results.length > 0) {
    imgs = results.map(img => <Img url={img.images.fixed_height.url} key={img.id} />);  
  } else {
    imgs = <NoImgs />
  }

  return(
    <ul className="photo-container">
     {imgs}
    </ul> 
  );
}

export default ImgList;
