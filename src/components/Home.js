
import React from 'react';
import { Link } from "react-scroll";
import Navigation from './Navigation'
import About from './About'


export default class Home extends React.Component {
    render() {
        return(

            <div>
                <div className="filterMain"> </div>
                <div className="home">
                    <HomeNavigation/>
                    <div className="titleHome">
                        <h1>Merida</h1>
                        <h2>Marta Jakubowska</h2>
                    </div>
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
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {600}
                        className="home-nav-list-link"
                    >Gallery</Link>
                    <Link
                        activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {600}
                        className="home-nav-list-link"
                    >About</Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {600}
                        className="home-nav-list-link"
                    >Contact</Link>
                </ul>
            </div>
        )
    }
};