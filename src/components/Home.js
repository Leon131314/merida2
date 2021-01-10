
import React from 'react';
import { Link } from "react-scroll";
import Navigation from './Navigation'
import About from './About';
import Video from "../assets/spot_promujący_album.mp4";


export default class Home extends React.Component {
    render() {
        return(

            <div className="HomeTest">
                {/* <div className="filterMain"> </div> */}
                <div className="filterMain"> </div>   
                <div className="home">
                    <HomeNavigation/>
                   

                    <div className="titleHome">
                    <div className="glow">
                        <h1>Merida</h1>
                        </div>
                        <h2>Marta Jakubowska</h2>

                     
                        
                    </div>
                    <Link
                        activeClass="active"
                        to="titleHome"
                        spy={true}
                        smooth={true}
                        offset={820}
                        duration= {600}
                        className="home-nav-list-link"
                    ><div className="arrow">
                            
                    </div></Link>


                    <video controls autostart autoPlay src={Video} type="video/mp4" />
                    
                    <About/>
                
                </div>
            </div>
           
        )
    }
}

class HomeNavigation extends React.Component {

    render() {
        return (
            <div>
                <ul className="home-nav-list" id="home-menu">
                    <Link
                        activeClass="active"
                        to="home"
                        spyh={true}
                        smooth={true}
                        offset={-70}
                        duration= {600}
                        className="home-nav-list-link"
                    > Start</Link>
                    <Link
                        activeClass="active"
                        to="titleHome"
                        spy={true}
                        smooth={true}
                        offset={820}
                        duration= {600}
                        className="home-nav-list-link"
                    >Video</Link>
                    <Link
                        activeClass="active"
                        to="About-Main"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration= {600}
                        className="home-nav-list-link"
                    >About</Link>
                </ul>
            </div>
        )
    }
};