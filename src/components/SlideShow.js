import React from 'react';
import ImageGallery from 'react-image-gallery';



import img1 from '../assets/instagram_okładka.jpg'
import img2 from '../assets/mockup_digipack_wnętrze.jpg'
import img3 from '../assets/mockup_digipack_okładka.jpg'



const images = [
  
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