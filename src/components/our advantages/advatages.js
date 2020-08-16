import React from 'react';
import './advantages.css';
import brand from './megaphone.png';
import fast from './delivery.png';
import safety from './safety.png';
import AOS from 'aos';
import './media.css';

export default class Advantages extends React.Component{
    componentDidMount(){
        AOS.init({
            duration: 1000
        })
    }
    render(){
        const cards = [
            {title: 'BRAND', src: `${brand}`},
            {title: 'FAST', src: `${fast}`},
            {title: 'SAFETY', src: `${safety}`}
        ]
        return(
            <div className="advantages">
                <div data-aos="fade-right" className="wrap_title">
                    <h2>OUR ADVANTAGES</h2>
                    <div className="stick"/>
                </div>
                <div className="wrap_content_ad">
                    <div className="block_text_ad">
                        <p data-aos="flip-down">Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore 
                        veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. 
                        Nemo enim ipsam voluptatem</p>
                    </div>
                    <div className="block_bottom_ad"/>
                    <div className="block_cards_ad">
                        {
                            cards.map((item, i) => {
                                return (
                                    <div data-aos="zoom-in" key={i} className="card">
                                        <h2>{item.title}</h2>
                                        <div className="circle">
                                            <img src={item.src} alt=""/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}