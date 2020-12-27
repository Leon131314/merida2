import Navigation from "./components/Navigation";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SlideShow from "./components/SlideShow";
import VideoHome from './components/VideoHome';
import Home from './components/Home';
import Music from './components/Music';
import Dance from './components/Dance';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
      <div>
          
       
          <Router>
        
              <header className="page-header">
              {/* <CookieConsent buttonText='OK'>This website uses cookies to enhance user experience.</CookieConsent> */}
              {/* <div className="logo"></div> */}
                  <div className="main-nav">
                      <Navigation /> 

                     
                  </div>
                  <div className='main-nav-right'>
 
                      <div className="main-nav-social-wrapper">
                      <a href="https://www.facebook.com/BillyCune/" target='_blank' rel="noopener noreferrer">
                          <div className="facebook" />
                      </a>
                      <a href="https://www.instagram.com/billycuneart/" target='_blank' rel="noopener noreferrer">
                          <div className="instagram" />
                      </a>
                      <a href="https://www.deviantart.com/cune" target='_blank' rel="noopener noreferrer">
                          <div className="deviantart"/>
                      </a>
                      </div>
                  </div>

               
              </header>
              <div className="filterMain"> </div>    
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/music" component={Music} />
                  <Route path="/dance" component={Dance} />
                  <Route path="/shop" component={Shop} />
                  <Route path="/contact" component={Contact} />
                  {/* <Route component={NotFound} />  */}
              </Switch>

             
          </Router>
         
         <Footer/>
    
      </div>
  );
}

export default App;