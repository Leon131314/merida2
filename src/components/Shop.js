import React from 'react';
import GallerySlide from './SlideShow';


export default class Shop extends React.Component {
    render() {
        return(
            // <div className="Shop1">


            
            <div className="Shop">
                
                    <GallerySlide/>
                    <div className="shopInfo">
                        <h1>Cena płyty: 30 zł + koszt wysłki pocztą (+7zł) lub kurierem (+11zł)</h1>
                        <h2>Zamówienia przyjmujemy poprzez zakładkę kontakt :)</h2>
                    </div>
            {/* </div> */}

            </div>
        )
    }
}