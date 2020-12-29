import React from 'react';
import ReactPlayer from 'react-player'





export default class Music extends React.Component {
    render() {
        return(
            <div className="music-main">
            <div className="Music">
                    {/* <VideoDance/> */}

                    <row-1>

                  
                                      </row-1>
                    <iframe width="760" height="415" src="https://www.youtube.com/embed/lCoBdO8wFBM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                    <row-3> <iframe width="760" height="415" src="https://www.youtube.com/embed/Io4n1xt40dA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                                       </row-3>
                    {/* <row-2>
                    <iframe width="760" height="415" src="https://www.youtube.com/embed/Pxfu5NckC0k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </row-2> */}
                   
                   

            </div>

            <div class="timeline">
            <div class="container1 right1">
            <div class="content">
                <h2>Mar 2020</h2>
                <p>Szychowski feat Merida - MIŁOŚĆ
</p>
            </div>
            </div>
            <div class="container2 right2">
            <div class="content">
                <h2>Jul 2019</h2>
                <p>Merida Jacobs - Heritage
</p>
            </div>
            </div>
            {/* <div class="container right">
            <div class="content">
                <h2>Apr 2019</h2>
                <p>MASTERS CHOREO</p>
            </div>
            </div> */}
            </div>
            </div>
        )
    }
}