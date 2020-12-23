import React from 'react';
import {NavLink} from "react-router-dom";

const activeStyle = {
    fontWeight: "bold"
};

export default class Navigation extends React.Component {
    changeClick(e){
        const menu = document.querySelector('.main-nav-list');
        menu.classList.remove('show');
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
                <ul onClick={e => this.changeClick(e)} className="main-nav-list" id="menu">
                    <li><NavLink activeStyle={activeStyle} exact to="/">Home</NavLink></li>
                    <li><NavLink activeStyle={activeStyle} to="/portfolio">Taniec</NavLink></li>
                    <li><NavLink activeStyle={activeStyle} to="/makingof">Muzyka</NavLink></li>
                    <li><NavLink activeStyle={activeStyle} to="/shop">Sklep</NavLink></li>
                </ul>
            </>
        )
    }
};