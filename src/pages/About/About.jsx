import React, { Component } from 'react';
import "./About.css"
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about-container" >
                <img src = "/images/netflix-2.jpg" className = "bg-img" alt=""></img>
                  {/* style = {{backgroundImage : `url(/images/netflix-2.jpg)`,backgroundSize : "cover"}} */}
                <div className="about-wrapper-1">
                    <div className="about-title">
                        About Us
                    </div>
                    
                    <div className="about-content">
                        <p className="para-1">
                            Cinemate is a movie database website where you can search for movies or TV shows. This web-app makes use of React js as the front-end software and fetches movie results from OMDB API.
                        </p>
                    </div>
                    <div className="about-title-2">
                        Powered By
                    </div>
                    <div className="about-content-2">
                        <div className="icon1">
                            <img src="/images/reacticon.png" alt=""></img>
                            <p>React JS</p>
                        </div>
                        <div className="icon3">
                            <img src="/images/omdb.png" alt=""></img>
                            <p>OMDb</p>
                        </div>
                        <div className = "icon2">
                            <img src="/images/nodejs.png" alt=""></img>
                            <p>Node.js</p>
                        </div>
                    </div>
                    <div className="about-title-2">
                        Created By
                    </div>
                    <div className="about-content">
                        <p className="para-1">
                            Akash E
                        </p>
                        <p className="para-1">
                            Department of Computer Science and Engineering
                        </p>
                        <p className="para-1">
                            College of Engineering, Guindy
                        </p>
                        
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default About;