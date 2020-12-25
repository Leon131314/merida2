import React from 'react';
import ImageGallery from 'react-image-gallery';



import img0 from '../assets/fb_zdj_w_tle_1.jpg'
import img1 from '../assets/fb_zdj_w_tle_1.jpg'
import img2 from '../assets/mer3.jpg'
import img3 from '../assets/1605123683818_filtered.JPG'



const images = [
    {
        original: img0,
    },
    {
        original: img1,
    },
    {
        original: img2,
    },
    {
        original: img3,
    },
  
];


const properties = {
    autoPlay: true,
    showThumbnails: false,
};
export default class GallerySlide extends React.Component {
    render() {
        return(
            <div className="main-gallery-container" >
                <div className="main-gallery-desktop">
                    <ImageGallery {...properties} items={images} />
                </div>
              
            </div>
        )
    }
}