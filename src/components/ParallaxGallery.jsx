import React from 'react';

export default function ParallaxGallery(props) {
  return (
    <div className='parallax'>
      <img src={props.img0} alt="Showcase thumbnail" />
      <img src={props.img1} alt="Showcase thumbnail" />
      <img src={props.img2} alt="Showcase thumbnail" />
    </div>
  );
}
