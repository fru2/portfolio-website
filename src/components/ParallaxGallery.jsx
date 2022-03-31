import React from 'react';

import Image1 from '../assets/images/image1.png';
import Image2 from '../assets/images/image2.png';
import Image3 from '../assets/images/image3.png';

export default function ParallaxGallery(props) {
  return (
    // <div className='parallax'>
    //   <img src={props.img0} alt="Showcase thumbnail" />
    //   <img src={props.img1} alt="Showcase thumbnail" />
    //   <img src={props.img2} alt="Showcase thumbnail" />
    // </div>

    <div className='parallax'>
      <img className='img1' src={Image1} alt="Showcase thumbnail" />

      <div>
        <img src={Image2} alt="Showcase thumbnail" />
      </div>

      <img className='img2' src={Image3} alt="Showcase thumbnail" />
    </div>

  );
}
