import React from 'react';
import team from './team.jpg';
import './aboutUs.css';
import AOS from 'aos';
import './media.css';

class AboutUs extends React.Component {
    componentDidMount(){
        AOS.init({duration:1000});
    }
    changeTitle(title){
        return title.toUpperCase();
    }
    render(){
        const title = 'About Us';
        return (
            <div className="aboutUs">
                <div data-aos="fade-right" className="wrap_title">
                    <h2>{this.changeTitle(title)}</h2>
                    <div className="stick"/>
                </div>
                <div data-aos="zoom-in" className="wrap_content">
                    <div className="block_border1"/>

                    <div className="inner_about">
                        <p
                        className="block_text">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco
                            laboris nisi ut  ex ea
                            commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                        <img className="img_about" 
                        src={team} alt=""
                        />
                    </div>
                    
                    <div className="block_border2"/>
                </div>
            </div>
        )
    }
}

export default AboutUs;