import React from 'react';

const ImageScore = (props) => {
  const { ups, downs } = props;

  upsPercent = `${(100* ups) / (ups + downs)}%`;
  downsPercent = `${(100* downs) / (ups + downs)}%`;
  return (
    <div>
      Ups/Downs
      <div className="progress">
        <div style={{ width: upsPercent}} className="progress-bar progress-bar-success progress-bar-striped" />
        <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-stiped" />
      </div>
    </div>
  )
};

export default ImageScore;
