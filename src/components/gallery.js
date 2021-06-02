import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';

import image1 from '../imgs/condoImages/IMG_9086.jpg'
import image2 from '../imgs//condoImages/IMG_9087.jpg'
import image3 from '../imgs//condoImages/IMG_9088.jpg'
import image4 from '../imgs//condoImages/IMG_9089.jpg'
import image5 from '../imgs//condoImages/IMG_9090.jpg'
import image6 from '../imgs//condoImages/IMG_9092.jpg'
import image7 from '../imgs//condoImages/IMG_9094.jpg'
import image8 from '../imgs//condoImages/IMG_9095.jpg'
import image9 from '../imgs//condoImages/IMG_9096.jpg'
import image10 from '../imgs//condoImages/IMG_9097.jpg'
import image11 from '../imgs//condoImages/IMG_9104.jpg'
import image12 from '../imgs//condoImages/IMG_9105.jpg'
import image13 from '../imgs//condoImages/IMG_9106.jpg'
import image14 from '../imgs//condoImages/IMG_9107.jpg'
import image15 from '../imgs//condoImages/IMG_9108.jpg'
import image16 from '../imgs//condoImages/IMG_9109.jpg'
import image17 from '../imgs//condoImages/IMG_9110.jpg'
import image18 from '../imgs//condoImages/IMG_9111.jpg'
import image19 from '../imgs//condoImages/IMG_9112.jpg'
import image20 from '../imgs//condoImages/IMG_9113.jpg'
import image21 from '../imgs//condoImages/IMG_9114.jpg'
import image22 from '../imgs//condoImages/IMG_9115.jpg'
import image23 from '../imgs//condoImages/IMG_9116.jpg'
import image24 from '../imgs//condoImages/IMG_9117.jpg'
import image25 from '../imgs//condoImages/IMG_9118.jpg'
import image26 from '../imgs//condoImages/IMG_9119.jpg'
import image27 from '../imgs//condoImages/IMG_9120.jpg'
import image28 from '../imgs//condoImages/IMG_9121.jpg'
import image29 from '../imgs//condoImages/IMG_9122.jpg'
import image30 from '../imgs//condoImages/IMG_9123.jpg'
import image31 from '../imgs//condoImages/IMG_9124.jpg'
import image32 from '../imgs//condoImages/IMG_9125.jpg'
import image33 from '../imgs//condoImages/IMG_9126.jpg'
import image34 from '../imgs//condoImages/IMG_9127.jpg'
import image35 from '../imgs//condoImages/IMG_9128.jpg'
import image36 from '../imgs//condoImages/IMG_9129.jpg'
import image37 from '../imgs//condoImages/IMG_9130.jpg'


const images = [
    {
      original: image1,
      thumbnail: image1
    },
    {
        original: image2,
        thumbnail: image2
      },
      {
        original: image3,
        thumbnail: image3
      },
      {
        original: image4,
        thumbnail: image4
      },
      {
        original: image5,
        thumbnail: image5
      },
      {
        original: image6,
        thumbnail: image6
      },
      {
        original: image7,
        thumbnail: image7
      },
      {
        original: image8,
        thumbnail: image8
      },
      {
        original: image9,
        thumbnail: image9
      },
      {
        original: image10,
        thumbnail: image10
      },
      {
        original: image11,
        thumbnail: image11
      },
      {
        original: image12,
        thumbnail: image12
      },
      {
        original: image13,
        thumbnail: image13
      },
      {
        original: image14,
        thumbnail: image14
      },
      {
        original: image15,
        thumbnail: image15
      },
      {
        original: image15,
        thumbnail: image15
      },
      {
        original: image16,
        thumbnail: image16
      },
      {
        original: image17,
        thumbnail: image17
      },
      {
        original: image18,
        thumbnail: image18
      },
      {
        original: image19,
        thumbnail: image19
      },
      {
        original: image20,
        thumbnail: image20
      },
      {
        original: image21,
        thumbnail: image21
      },
      {
        original: image22,
        thumbnail: image22
      },
      {
        original: image23,
        thumbnail: image23
      },
      {
        original: image24,
        thumbnail: image24
      },
      {
        original: image25,
        thumbnail: image25
      },
      {
        original: image26,
        thumbnail: image26
      },
      {
        original: image27,
        thumbnail: image27
      },
      {
        original: image28,
        thumbnail: image28,
      },
      {
        original: image29,
        thumbnail: image29
      },
      {
        original: image30,
        thumbnail: image30
      },
    {
        original: image31,
        thumbnail: image31
      },
      {
        original: image32,
        thumbnail: image32
      },
      {
        original: image33,
        thumbnail: image33
      },
      {
        original: image34,
        thumbnail: image34
      },
      {
        original: image35,
        thumbnail: image35
      },
      {
        original: image36,
        thumbnail: image36
      },
      {
        original: image37,
        thumbnail: image37
      },
  ];

class Gallery extends Component {

    render() {
        return <ImageGallery items={images}
        showIndex={true}
        originalWidth="75%"
        originalHeight="75%"
        thumbnailWidth="75%"
        thumbnailHeight="75%"
        />;
      }
}
 
export default Gallery;