import React, { Component } from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {

  validImages = props.images.filter((image) => !image.is_album);

  const ImageDetails = validImages.map(image => {
    return <ImageDetail image={image} />
  });

  return (
    <ul>
      {ImageDetails}
    </ul>
  );
};

export default ImageList;
