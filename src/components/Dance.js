import React from 'react';
import VideoDance from './VideoTest';

export default class Dance extends React.Component {
    render() {
        return(
            <div className="dance-main">
            <div className="Dance">
                    {/* <VideoDance/> */}

                    <row-1>

                  
                    <iframe width="760" height="415" src="https://www.youtube.com/embed/VRHWv1UgwxQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </row-1>

                    <row-3>
                    <iframe width="760" height="415" src="https://www.youtube.com/embed/39IXXNnFoC0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </row-3>
                    <row-2>
                    <iframe width="760" height="415" src="https://www.youtube.com/embed/Pxfu5NckC0k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </row-2>
                   
                   

            </div>

            <div class="timeline">
            <div class="container1 right1">
            <div class="content">
                <h2>Apr 2020</h2>
                <p>DANCE SHOWREEL</p>
            </div>
            </div>
            <div class="container2 right2">
            <div class="content">
                <h2>Mar 2020</h2>
                <p>"Me"-OSHUN/ DC Mamma's/ Marta Jakubowska class</p>
            </div>
            </div>
            <div class="container right">
            <div class="content">
                <h2>Apr 2019</h2>
                <p>MASTERS CHOREO</p>
            </div>
            </div>
            </div>
            </div>



        )
    }
}