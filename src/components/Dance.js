import React from 'react';
import VideoDance from './VideoTest';

export default class Dance extends React.Component {
    render() {
        return(
            <div className="dance-main">
            <div className="Dance">
                    {/* <VideoDance/> */}

                    <row-1>

                  
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VRHWv1UgwxQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </row-1>

                    <row-3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/39IXXNnFoC0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </row-3>
                    <row-2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Pxfu5NckC0k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </row-2>
                   
                   

            </div>

            <div class="timeline">
            <div class="container right">
            <div class="content">
                <h2>2017</h2>
                <p>Lorem ipsum..</p>
            </div>
            </div>
            <div class="container right">
            <div class="content">
                <h2>2016</h2>
                <p>Lorem ipsum..</p>
            </div>
            </div>
            </div>
            </div>



        )
    }
}