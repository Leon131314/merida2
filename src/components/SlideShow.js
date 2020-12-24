import React from 'react';

import { Slide } from 'react-slideshow-image';
import img0 from '../assets/mer1.jpg'
import img1 from '../assets/mer2.jpg'
import img2 from '../assets/mer3.jpg'
import img3 from '../assets/mer4.jpg'


// const slideImages = [img0, img1, img2];

const slide3 = () => (
    <div className='slide3TXT'>H-D motor set - 12 prints<br/>click <a className='slideLink' href='https://billycune.com/shop/product-category/motor-sets/'>here</a> to see more</div>
)

const slideImages = [
    {
        img: img0,
        desc: 'welcome on the road'
    },
    {
        img: img3,
        desc: slide3()
    },
    {
        img: img1,
        desc: null
    },
    {
        img: img2,
        desc: null
    }
]

const properties = {
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

export default class SlideShow extends React.Component {
    render() {
        return(
            <div className="home-slide-show-container" id="slide-show">
                <div className="slide-container">
                    <Slide {...properties}>
                        {
                            slideImages.map((img,index) =>
                                <div className='each-slide' key={index}>
                                    <div style={{'backgroundImage': `url(${img.img})`}}>{img.desc===null?'':<span>{img.desc}</span>}</div>
                                </div>
                            )
                        }
                    </Slide>
                </div>
            </div>
        )
    }
}