import React from 'react';
import './header.css';
import styled from 'styled-components';
import bg from './main-bg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './media.css';
import {Link} from 'react-scroll';

class Header extends React.Component {
    componentDidMount(){
        AOS.init({
            duration: 1000
        });
    }

    render(){
        const Headerblock = styled.header`
            width: 100%;
            height: 1000px;
            background-image:url(${bg});
            background-position: center;
            @media (max-width:596px) and (min-width: 419px) {
                height: 700px;
            }
            @media (max-width:418px) {
                height: 500px;
            }
        `;

        return(
            <Headerblock>
                <div className="block_filter">
                    <div className="wrapp_header">
                        <h1 data-aos="fade-up">
                            WEB-BASE <br/>
                            <span data-aos="fade-down"
                            data-aos-delay="150">SHOCKLIFE</span>
                        </h1>
                        <Link smooth={true} to='join'>
                            <button>JOIN US</button>
                        </Link>
                    </div>
                </div>
            </Headerblock>
        )
    }
}

export default Header;