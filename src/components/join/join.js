import React from 'react';
import './join.css';

export default class Join extends React.Component {
    render(){
        return (
            <div className="join">
                <div data-aos="fade-right" className="wrap_title jn">
                    <h2>HOW CAN I JOIN?</h2>
                    <div className="stick"/>
                </div>
                <div data-aos="zoom-in" className="wrap_content">
                    <div className="block_border1"/>
                    <div className="inner_join">
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
                        <form className="form">
                            <div className="wrap_inps">
                                <input className="inp_name inp" placeholder="Enter your name" name="name"/>   
                                <input className="inp_email inp" placeholder="Enter your email" name="email"/>
                                <input className="inp_phone inp" placeholder="Enter your phone number" name="phone"/>
                                <button type="submit" className="btn_send">Send request</button>
                            </div>
                        </form>
                    </div>
                    
                    <div className="block_border2"/>
                </div>
            </div>
        )
    }
}