import React from 'react';
import ReactPlayer from 'react-player'





export default class Music extends React.Component {
    render() {
        return(
            <div className="Music">
     <ReactPlayer
    url="https://youtu.be/VRHWv1UgwxQ"
    controls
    playbackRate = {2}
    width = "896px"
    height = "504px"
/>
            
            </div>
        )
    }
}