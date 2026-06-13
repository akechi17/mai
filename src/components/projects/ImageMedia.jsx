import React from "react";

const ImageMedia = ({handleError, image}) => {
  return (
    <div className='med' data-v-afd506cc>
      <img
        src={image}
        onError={handleError}
        alt
        loading='eager'
        data-nuxt-img
        srcSet={`${image} 1x, ${image} 2x`}
        data-v-afd506cc
      />
    </div>
  );
};

export default ImageMedia;
